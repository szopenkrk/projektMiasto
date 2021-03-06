import { AnyAction } from 'redux';

import { ReduxActionType, StateDevices } from 'client/model/Redux';

function getInitialState (): StateDevices {
    return [];
}

export default function (state: StateDevices = getInitialState(), action: AnyAction): StateDevices {
    switch (action.type) {
        case ReduxActionType.DEVICES_ADD: {
            return state.concat(action.devices);
        }
        default: return state;
    }
}
