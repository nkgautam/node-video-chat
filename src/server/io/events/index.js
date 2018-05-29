import {
  CALL_ACCEPTED,
  CALL_CANCELED,
  CALL_IGNORED,
  CALL_REQUEST,
  DISCONNECT,
  ICE_CANDIDATE,
  ICE_DESCRIPTION,
} from '../../../constants';
import handleCallAccepted from './call-accepted';
import handleCallCanceled from './call-canceled';
import handleCallIgnored from './call-ignored';
import handleCallRequest from './call-request';
import handleDisconnect from './disconnect';
import handleIceCandidate from './ice-candidate';
import handleIceDescription from './ice-description';

const handlers = {
  [CALL_ACCEPTED]: handleCallAccepted,
  [CALL_CANCELED]: handleCallCanceled,
  [CALL_IGNORED]: handleCallIgnored,
  [CALL_REQUEST]: handleCallRequest,
  [DISCONNECT]: handleDisconnect,
  [ICE_CANDIDATE]: handleIceCandidate,
  [ICE_DESCRIPTION]: handleIceDescription,
};

export default (io, socket) =>
  Object.keys(handlers).forEach(event =>
    socket.on(event, handlers[event].bind(null, io, socket)));
