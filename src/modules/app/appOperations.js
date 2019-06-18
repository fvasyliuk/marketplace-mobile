import * as actions from './appActions';
import Api, { SocketApi } from '../../api';
import { viewerOperations } from '../viewer';
import { messagesOperations } from '../messages';


export function init() {
    return async function initThunk(dispatch) {
        try {
            dispatch(actions.initialization.start());            

            Api.init()

            await dispatch(viewerOperations.fetchViewer())

            dispatch(actions.initialization.success());

        } catch (err) {
            console.log(err);
            dispatch(actions.initialization.error({ message: err.message }))
        }
    }
};