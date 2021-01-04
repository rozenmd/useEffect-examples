<div>
  <h1 align="center"><a href="https://useeffectbyexample.com">Learn useEffect By Example</a></h1>
  <strong>
    Get the hang of using useEffect like a pro, with useEffect By Example.
  </strong>

  <ul>
    <li>
      You'll learn how to use useEffect to fetch data, and avoid pesky race conditions. 
    </li>
    <li>
      Take the guesswork out of using the dependency array, and keep the eslint-plugin happy.
    </li>
          <li>
            Prevent infinite re-renders through the use of useCallback and useMemo. 
    </li>
  </ul>

<p align="center">
  <a href="http://useeffectbyexample.com/" align="center">
    <img
      height="386px"
      width="243px"
      alt="Learn useEffect By Example"
      src="https://useeffectbyexample.com/img/useeffect-by-example-cover.png"
    />
  </a>
  </div>
</div>

<hr />

<!-- prettier-ignore-start -->
[![GPL 3.0 License][license-badge]][license]
<!-- prettier-ignore-end -->


## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `^10.13 || 12 || 14 || 15`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setting up
For each chapter, you'll need to run:

```shell
npm install
```

To download the dependencies.

## Running the apps

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.



### Examples

- `1-fetching-data/src/before/App.js`: Fetching data with useEffect
- `1-fetching-data/src/after/App.js`: Fetching & displaying data with useEffect
- `2-dependency-array/src/before/App.js`: Demonstrating the lack of a dependency
- `2-dependency-array/src/after/App.js`: Adding a dependency to allow useEffect to re-fire
- `3-race-conditions/src/before/App.js`: Demonstrating race conditions with an async useEffect
- `3-race-conditions/src/after-boolean/App.js`: Fixing race conditions using a clean-up function, and a boolean
- `3-race-conditions/src/after-abortcontroller/App.js`: Fixing race conditions using a clean-up function, and an [AbortController][mdn]
- `4-usestate-and-useeffect/src/App.js`: Demonstrating use of useState, useCallback, and useEffect

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/rozenmd/useEffect-examples/blob/main/LICENSE.md
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[mdn]: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
<!-- prettier-ignore-end -->
