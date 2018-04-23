export const API = {
    init(options) {
        const { serverURL, APPLICATION_ID, API_KEY } = options
        Backendless.serverURL = serverURL;
        Backendless.initApp(APPLICATION_ID, API_KEY);
    },

    collections: {
        get(parentId) {
            const whereClause = parentId ? ` == '${parentId}'` : `is null`
            const queryBuilder = Backendless.DataQueryBuilder.create()
            parentId
                ? queryBuilder.setRelated('parentId')
                : queryBuilder.setWhereClause(`parentId is null`)

            return Backendless.Persistence.of('collections').find(queryBuilder)
        }
    }
}
