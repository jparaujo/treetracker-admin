import Axios from "axios";
import { dispatch } from '@rematch/core'

export const trees = {
    state: {
        data: [],
        page: 0,
        rowsPerPage: 10
    },
    reducers: {
        get(state, payload, { page, rowsPerPage }) {
            
            return { data: payload, page: page, rowsPerPage: rowsPerPage };
        }
    },
    effects: {
        async getTreesAsync({ page, rowsPerPage }) {
            Axios.get(`http://dev.treetracker.org/api/admin/trees?filter[limit]=${rowsPerPage}&filter[skip]=${page * rowsPerPage}&filter[fields][id]=true`)
                .then((response) => {
                    this.get(response.data, { page: page, rowsPerPage: rowsPerPage });
                });
        }
    }
}