// lib/services/ActiveDirectoryService.ts
class ActiveDirectoryService {
    protected static _instance: ActiveDirectoryService | undefined = undefined;
    static initialize(
        ldapClient: AbstractLdapClient,
        activeDirectoryConfig: ActiveDirectoryConfig,
    ) {
        if (!ActiveDirectoryService._instance) {
            ActiveDirectoryService._instance = new ActiveDirectoryService(
                ldapClient,
                activeDirectoryConfig,
            );
        }
        return ActiveDirectoryService._instance;
    }

    static get instance(): ActiveDirectoryService {
        if (!ActiveDirectoryService._instance) {
            throw new Error(...);
        }
        return ActiveDirectoryService._instance;
    }

    private ldapClient: AbstractLdapClient;

    ...

    protected constructor(
        ldapClient: AbstractLdapClient,
        activeDirectoryConfig: ActiveDirectoryConfig,
    ) {
        this.ldapClient = ldapClient;
        this.activeDirectoryConfig = activeDirectoryConfig;
    }

    async start() { ... }
    async authenticateUser(bindDN: string, password: string): Promise<boolean> { ... }
    async getUserBysAMAccountName(sAMAccountName: string): Promise<User> { ... }
    ...
}
