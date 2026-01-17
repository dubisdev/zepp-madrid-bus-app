import { localStorage } from "@zos/storage"

export class FavouritesStorage {
    /**
     * @type {Map<string, FavouriteStorageItem>}
     */
    #favourites = new Map()
    #STORAGE_KEY = "emt_favourite_stops"

    constructor() {
        this.#loadFavourites()
    }

    #loadFavourites() {
        const storedFavourites = localStorage.getItem(this.#STORAGE_KEY, JSON.stringify([]))

        try {
            const favouriteArray = JSON.parse(storedFavourites)

            if (!Array.isArray(favouriteArray)) {
                throw new Error("Favourites data is not an array")
            }

            this.#favourites = new Map(
                favouriteArray.map(fav => [fav.id, fav])
            )
        } catch {
            this.#favourites = new Map()

            this.#saveFavourites()
        }
    }

    /**
     * 
     * @param {FavouriteStorageItem} fav 
     * @returns {"saved" | "full"}
     */
    addFavourite(fav) {
        if (this.#favourites.has(fav.id)) {
            this.#saveFavourites()
            return "saved"
        }

        if (this.#favourites.size < 4) {
            this.#favourites.set(fav.id, fav)
            this.#saveFavourites()
            return "saved"
        }

        return "full"
    }

    /**
     * @param {string} favId 
     */
    removeFavourite(favId) {
        this.#favourites.delete(favId)
        this.#saveFavourites()
    }

    #saveFavourites() {
        const favArray = Array.from(this.#favourites.values())

        localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(favArray))
    }

    getFavourites() {
        return [...this.#favourites.values()]
    }

    /**
     * 
     * @param {string} favId 
     * @returns {boolean}
     */
    hasFavourite(favId) {
        return this.#favourites.has(favId)
    }
}
