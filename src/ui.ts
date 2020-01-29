import * as kue from 'kue';

const LOCAL_LISTENING_PORT = 56789;
kue.app.listen(LOCAL_LISTENING_PORT);
console.log("UI is listening on port", LOCAL_LISTENING_PORT);
