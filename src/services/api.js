export const API = {
    init(options) {
        const { serverURL, APPLICATION_ID, API_KEY } = options
        Backendless.serverURL = serverURL;
        Backendless.initApp(APPLICATION_ID, API_KEY);
    },

    collections: {
        get(parentId) {
            const queryBuilder = Backendless.DataQueryBuilder.create();
            parentId
                ? queryBuilder.setWhereClause(`parentId = '${parentId}'`)
                : queryBuilder.setWhereClause(`parentId is null`)

            return Backendless.Persistence.of('collections').find(queryBuilder)
        }
    }
}
