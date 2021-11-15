# `@howto/react-component`

> This package builds off of the principles in [`@howto/browser-modules`](https://www.npmjs.com/package/@howto/browser-modules) but extends it with some React specific things to make development and testing easier.

## Explainer

Where `@howto/browser-modules` gives a general purpose browser module, this package illustrates the process of creating a standalone React component that addresses many of the concerns of component develoeprs. This package will build off of the principles of bundling and exporting modules illustrated in the general `@howto/browser-modules` package so it is recommended you start there.

### tl;dr

Everything from `@howto/browser-modules` still applies. Build your component in an isolate manner and test it the same way your users will use it.

## `index.tsx` vs. `component.tsx`

When developing a component I find it nice to be able to actually build with the component in an "app-like" environment. To facilitate that, this package takes the create-react-app approach and, leveraging `react-scripts`, loads the component as if it was loaded in an application. This allows you to develop the component in isolation while still having some of the DevEx niceties. To faciliate this, the `src/` folder contains both an `index.tsx` as well as a `component.tsx`. The `component.tsx` is designed for you to actually be able to implement your component. It is the package that is built and exported and is ultimately where 99% of your development time will be spent. `index.tsx` is there to allow you as a component author to exercise your component's API.

## Cypress Component Testing

> "Oh why would you develop in an app-like environment you should just do TDD"
>
> - Someone I'm sure

Because some people prefer TDD, this component also provides integration with Cypress component testing. In lieu of Jest, this package encourages you to test your visual components the same way your users, use them. The DevEx is quite nice and it makes for very stable components (you're actually testing what your users, use!) try it out with `yarn test-watch` in this components.
