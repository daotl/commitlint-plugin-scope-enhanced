import type { Commit, Plugin } from '@commitlint/types'

// Reference: https://stackoverflow.com/a/69362848/4923728
const plugin: Plugin = {
  rules: {
    'scope-enum-enhanced': (
      parsed: Commit,
      when = 'always',
      value: string[] = [],
    ): [boolean, string] => {
      if (!parsed.scope) {
        return [true, '']
      }

      // Only use comma sign as the separator
      const npmScopes = parsed.scope.split(',')

      if (!Array.isArray(value)) {
        throw new TypeError('config value should be a string array')
      }

      // Check if all scopes are valid
      const result =
        value.length === 0 || npmScopes.every((s) => value.includes(s))

      const negated = when === 'never'

      return [
        negated ? !result : result,
        `scope must${negated ? ` not` : ''} be one of [${value.join(', ')}]`,
      ]
    },
  },
}

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module commitlint requires for
 * plugins.
 */
export = plugin
