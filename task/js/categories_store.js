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

export class CategoriesStore {
    #localStorageKey;
    #internalData

    constructor() {
        this.#localStorageKey = 'сategories_store'
    }

    get length() {
        return this.#internalData.сategories.length;
    }

    init() {
        this.#readFromLocalStorage();
    }

    findAll() {
        return [...this.#internalData.сategories];
    }

    addCategory(description, color) {
        let category = new Category(this.#internalData.lastCategoryId + 1, description, color);
        this.#internalData.lastCategoryId = category.id;
        this.#internalData.сategories.push(category);
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
    }
}

class InternalData {
    static fromJson(json) {
        const lastCategoryId = json?.lastCategoryId ?? 0;
        const сategories = json?.сategories ?? [];

        return new InternalData(lastCategoryId, сategories)
    }

    constructor(lastCategoryId, сategories) {
        this.lastCategoryId = lastCategoryId;
        this.сategories = сategories;
    }

    toJson() {
        return {
            lastCategoryId: this.lastCategoryId,
            сategories: this.сategories,
        }
    }
}