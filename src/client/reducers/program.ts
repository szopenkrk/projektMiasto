import { AnyAction } from 'redux';

import { ReduxActionType, StateProgram } from 'client/model/Redux';

function getInitialState (): StateProgram {
    return {
        needy: null,
        statuses: null,
        regions: [],
    };
}

export default function (state: StateProgram = getInitialState(), action: AnyAction): StateProgram {
    switch (action.type) {
        case ReduxActionType.PROGRAM_SUMMARY_LOAD: {
            return { ...action.summary };
        }
        default: return state;
    }
}
