import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import pkg from "./package.json" assert { type: "json" };

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'esm',
            sourcemap: true,
            exports: 'default',
            name: 'react-lib'
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss()
    ]
}