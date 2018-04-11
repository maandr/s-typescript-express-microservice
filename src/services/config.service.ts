import * as config from 'config'

export class ConfigService {
    
    get(property: string): string {
        if(!config.has(property)) {
            throw new ConfigurationError(`
                Property '${property}' is not configured.
                Make sure it is specified in the config/${process.env.NODE_ENV}.yml.
            `);
        }
        return config.get(property);
    }
}

export class ConfigurationError extends Error {}