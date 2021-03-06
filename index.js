module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: [
          './tsconfig.json',
          './tsconfig.eslint.json',
        ],
      },
      plugins: [
        '@typescript-eslint',
        'import',
        'node',
        'promise',
        'react',
        'react-hooks',
      ],
      settings: {
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
        'import/internal-regex': '^@(thrashplay|hexmarch|sophia)\/',
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
        },
        react: {
          version: 'detect',
        },
      },
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/ban-ts-comment': ['error'],
        '@typescript-eslint/ban-types': ['error'],
        '@typescript-eslint/brace-style': ['error', '1tbs', {
          allowSingleLine: false,
        }],
        '@typescript-eslint/naming-convention': ['error',
          {
            // Pascal is used by various constant type declarations
            selector: 'default',
            format: ['camelCase', 'PascalCase'],
          },
          {
            // allow metadata naming convention used in some internal projects
            selector: 'property',
            filter: '^_meta$',
            format: null,
          },
          {
            // PascalCase is needed to support various JSX usages
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'require',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/consistent-type-assertions': ['error'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
          },
        }],
        // TODO: Accessor ordering is not supported
        // https://github.com/typescript-eslint/typescript-eslint/issues/929
        '@typescript-eslint/member-ordering': ['error', {
          default: [
            'public-static-field',
            // 'public-static-accessor',
            'public-static-method',

            'protected-static-field',
            // 'protected-static-accessor',
            'protected-static-method',

            'private-static-field',
            // 'private-static-accessor',
            'private-static-method',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'constructor',

            // 'public-instance-accessor',
            // 'protected-instance-accessor',
            // 'private-instance-accessor',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        }],
        '@typescript-eslint/no-array-constructor': ['error'],
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-empty-interface': ['error'],
        '@typescript-eslint/no-inferrable-types': ['error'],
        '@typescript-eslint/no-misused-new': ['error'],
        '@typescript-eslint/no-namespace': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['error'],
        '@typescript-eslint/no-this-alias': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', {
          argsIgnorePattern: '^_',
        }],
        // '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/prefer-namespace-keyword': ['error'],
        '@typescript-eslint/triple-slash-reference': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['error'],
        'accessor-pairs': ['error'],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': ['error', {
          after: true,
          before: true,
        }],
        'block-spacing': ['error', 'always'],
        camelcase: 'off',
        'comma-dangle': ['error', {
          arrays: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
          imports: 'always-multiline',
          objects: 'always-multiline',
        }],
        'comma-spacing': ['error', {
          after: true,
          before: false,
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'constructor-super': ['error'],
        curly: ['error', 'multi-line'],
        'dot-location': ['error', 'property'],
        'dot-notation': ['error', {
          allowKeywords: true,
          allowPattern: '',
        }],
        'eol-last': ['error'],
        eqeqeq: ['error', 'always', {
          null: 'ignore',
        }],
        'for-direction': ['error'],
        'func-call-spacing': ['error', 'never'],
        'generator-star-spacing': ['error', {
          after: true,
          before: true,
        }],
        'import/export': ['error'],
        'import/first': ['error'],
        'import/no-absolute-path': ['error', {
          amd: false,
          commonjs: true,
          esmodule: true,
        }],
        'import/no-duplicates': ['error'],
        'import/no-named-default': ['error'],
        'import/no-webpack-loader-syntax': ['error'],
        'import/order': ['error', {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
          'newlines-between': 'always',
        }],
        'key-spacing': ['error', {
          afterColon: true,
          beforeColon: false,
        }],
        'keyword-spacing': ['error', {
          after: true,
          before: true,
        }],
        'lines-between-class-members': ['error', 'always', {
          exceptAfterSingleLine: true,
        }],
        'max-len': ['error', {
          code: 120,
        }],
        'new-cap': ['error', {
          capIsNew: false,
          newIsCap: true,
          properties: true,
        }],
        'new-parens': ['error'],
        'no-async-promise-executor': ['error'],
        'no-caller': ['error'],
        'no-case-declarations': ['error'],
        'no-class-assign': ['error'],
        'no-compare-neg-zero': ['error'],
        'no-cond-assign': ['error'],
        'no-console': ['error'],
        'no-constant-condition': ['error', {
          checkLoops: false,
        }],
        'no-control-regex': ['error'],
        'no-debugger': ['error'],
        'no-delete-var': ['error'],
        'no-duplicate-case': ['error'],
        'no-empty': ['error'],
        'no-empty-character-class': ['error'],
        'no-empty-pattern': ['error'],
        'no-eval': ['error'],
        'no-ex-assign': ['error'],
        'no-extend-native': ['error'],
        'no-extra-bind': ['error'],
        'no-extra-boolean-cast': ['error'],
        'no-extra-parens': ['error', 'functions'],
        'no-extra-semi': ['error'],
        'no-fallthrough': ['error'],
        'no-floating-decimal': ['error'],
        'no-func-assign': ['error'],
        'no-global-assign': ['error'],
        'no-implied-eval': ['error'],
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-iterator': ['error'],
        'no-labels': ['error', {
          allowLoop: false,
          allowSwitch: false,
        }],
        'no-lone-blocks': ['error'],
        'no-misleading-character-class': ['error'],
        'no-mixed-operators': ['error', {
          allowSamePrecedence: true,
          groups: [['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']],
        }],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-multi-spaces': ['error'],
        'no-multi-str': ['error'],
        'no-multiple-empty-lines': ['error', {
          max: 1,
          maxEOF: 0,
        }],
        'no-negated-in-lhs': ['error'],
        'no-new': ['error'],
        'no-new-func': ['error'],
        'no-new-object': ['error'],
        'no-new-require': ['error'],
        'no-new-wrappers': ['error'],
        'no-obj-calls': ['error'],
        'no-octal': ['error'],
        'no-octal-escape': ['error'],
        'no-path-concat': ['error'],
        'no-prototype-builtins': ['error'],
        'no-regex-spaces': ['error'],
        'no-return-assign': ['error', 'except-parens'],
        'no-self-assign': ['error', {
          props: true,
        }],
        'no-self-compare': ['error'],
        'no-sequences': ['error'],
        'no-shadow-restricted-names': ['error'],
        'no-sparse-arrays': ['error'],
        'no-tabs': ['error'],
        'no-template-curly-in-string': ['error'],
        'no-throw-literal': ['error'],
        'no-trailing-spaces': ['error'],
        'no-undef-init': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unmodified-loop-condition': ['error'],
        'no-unneeded-ternary': ['error', {
          defaultAssignment: true,
        }],
        'no-unsafe-finally': ['error'],
        'no-unsafe-negation': ['error'],
        'no-unused-expressions': ['error', {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        }],
        'no-unused-labels': ['error'],
        'no-useless-call': ['error'],
        'no-useless-catch': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-rename': ['error'],
        'no-useless-return': ['error'],
        'no-var': ['error'],
        'no-void': ['error'],
        'no-whitespace-before-property': ['error'],
        'no-with': ['error'],
        'node/no-deprecated-api': ['error'],
        'node/process-exit-as-throw': ['error'],
        'object-curly-newline': ['error', {
          consistent: true,
          multiline: true,
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', {
          allowAllPropertiesOnSameLine: false,
          allowMultiplePropertiesPerLine: true,
        }],
        'one-var': ['error', {
          initialized: 'never',
        }],
        'operator-linebreak': ['error', 'after', {
          overrides: {
            ':': 'before',
            '?': 'before',
            '|>': 'before',
          },
        }],
        'padded-blocks': ['error', {
          blocks: 'never',
          classes: 'never',
          switches: 'never',
        }],
        'prefer-const': ['error', {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        }],
        'prefer-promise-reject-errors': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        'promise/param-names': ['error'],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', {
          avoidEscape: true,
        }],
        'react-hooks/exhaustive-deps': ['warn'],
        'react-hooks/rules-of-hooks': ['error'],
        'react/display-name': [2],
        'react/jsx-key': [2],
        'react/jsx-max-props-per-line': [1, {
          maximum: 2,
        }],
        'react/jsx-no-comment-textnodes': [2],
        'react/jsx-no-duplicate-props': [2],
        'react/jsx-no-target-blank': [2],
        'react/jsx-no-undef': [2],
        'react/jsx-uses-react': [2],
        'react/jsx-uses-vars': [2],
        'react/no-children-prop': [2],
        'react/no-danger-with-children': [2],
        'react/no-deprecated': [2],
        'react/no-direct-mutation-state': [2],
        'react/no-find-dom-node': [2],
        'react/no-is-mounted': [2],
        'react/no-render-return-value': [2],
        'react/no-string-refs': [2],
        'react/no-unescaped-entities': [2],
        'react/no-unknown-property': [2],
        'react/no-unsafe': [0],
        'react/react-in-jsx-scope': [2],
        'react/require-render-return': [2],
        'require-yield': ['error'],
        'rest-spread-spacing': ['error', 'never'],
        semi: ['error', 'never'],
        'semi-spacing': ['error', {
          after: true,
          before: false,
        }],
        'sort-imports': ['error', {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error'],
        'space-unary-ops': ['error', {
          nonwords: false,
          words: true,
        }],
        'spaced-comment': ['error', 'always', {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          },
          line: {
            markers: ['*package', '!', '/', ',', '='],
          },
        }],
        'node/no-callback-literal': ['error'],
        'symbol-description': ['error'],
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'use-isnan': ['error'],
        'wrap-iife': ['error', 'any', {
          functionPrototypeMethods: true,
        }],
        'yield-star-spacing': ['error', 'both'],
        yoda: ['error', 'never'],
      },
    },
    {
      /* typescript-only rules */
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['error', {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        }],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-triple-slash-reference': 'off',
        'max-classes-per-file': 'off',
      },
    },
    {
      files: ['*.spec.*', '*.test.*'],
      env: {
        'jest/globals': true,
      },
      plugins: [
        'jest',
      ],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'dot-notation': 'off',
        'jest/expect-expect': 'warn',
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'warn',
        'jest/no-jest-import': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
      },
    },
    {
      files: ['*.json'],
      plugins: [
        'json',
      ],
      rules: {
        'json/*': ['error', { allowComments: true }],
      },
    },
  ],
}
