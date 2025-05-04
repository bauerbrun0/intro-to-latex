// lib/services/activeDirectoryService.ts
let ldapClient: LdapClient;
let reconnecting = false;

async function start(activeDirectoryConfig: LdapConfig) { ... }
async function startReconnecting() { ... }
async function stop() { ... }

const activeDirectoryService: ActiveDirectoryService = {
    start,
    stop,
};

export default activeDirectoryService;
