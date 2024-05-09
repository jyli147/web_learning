export class Category {
    #id;

    constructor(id, description, color) {
        this.#id = id;
        this.description = description;
        this.color = color;
    }

    get id() {
        return this.#id;
    }
}

export class UpdateCategoriesStoreEvent extends CustomEvent {
    static type = 'update_categoriess_store_event'

    constructor(categories) {
        super(UpdateCategoriesStoreEvent.type, { detail: { categories } })
    }

    get categories() {
        return this.detail.categories;
    }
}

export class CategoriesStore extends EventTarget {
    #localStorageKey;
    #internalData

    constructor() {
        super();
        this.#localStorageKey = 'categories_store'
    }

    get length() {
        return this.#internalData.categories.length;
    }

    init() {
        this.#readFromLocalStorage();
    }

    findAll() {
        return [...this.#internalData.categories];
    }

    findTargetCategoryId(targetCategoryId) {
        return this.#internalData.categories.find((category) => category.id === targetCategoryId)
    }

    addCategory(description, color) {
        let category = new Category(this.#internalData.lastCategoryId + 1, description, color);
        this.#internalData.lastCategoryId = category.id;
        this.#internalData.categories.push(category);
        this.#saveToLocalStorage()

        return category;
    }

    #readFromLocalStorage() {
        const internalDataSource = window.localStorage.getItem(this.#localStorageKey);
        const internalDataJson = JSON.parse(internalDataSource);
        this.#internalData = InternalData.fromJson(internalDataJson);
    }

    #saveToLocalStorage() {
        const internalDataJson = this.#internalData.toJson();
        const internalDataSource = JSON.stringify(internalDataJson);
        window.localStorage.setItem(this.#localStorageKey, internalDataSource)
        this.#notifyUpdateCategoriesStoreEvent()
    }
    #notifyUpdateCategoriesStoreEvent() {
        this.dispatchEvent(new UpdateCategoriesStoreEvent(this.findAll()));
    }
}

class InternalData {
    static fromJson(json) {
        const lastCategoryId = json?.lastCategoryId ?? 0;
        const schemaVersion = json?.schemaVersion ?? 1;

        const categories = (json?.categories ?? []).map((categoryJsonSource, index) => {
            return new Category(
                categoryJsonSource.id ?? lastTaskId + index,
                categoryJsonSource.description,
                categoryJsonSource.color,
            )
        });

        return new InternalData(lastCategoryId, categories, schemaVersion)
    }

    constructor(lastCategoryId, categories, schemaVersion) {
        this.lastCategoryId = lastCategoryId;
        this.categories = categories;
        this.schemaVersion = schemaVersion;
    }

    toJson() {
        let preparedCategories = this.categories.map((category) => {
            return {
                id: category.id,
                description: category.description,
                color: category.color,
            }
        });

        return {
            lastCategoryId: this.lastCategoryId,
            categories: preparedCategories,
            schemaVersion: this.schemaVersion,
        }
    }
}