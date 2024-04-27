# Changelog

## [1.4.6](https://github.com/easy-form/react-form-simple/compare/v1.4.5...v1.4.6) (2024-04-27)

### Bug Fixes

- fix useWatch not getting the latest status ([3545084](https://github.com/easy-form/react-form-simple/commit/3545084cf06b29a53baf3584ba86036675e560c4))
- optimize the handling of special fields in forms such as Date and Blob ([6b4b5ff](https://github.com/easy-form/react-form-simple/commit/6b4b5ff5d3212b841cc72fbb99566b5bfd44c2c5))

## [1.4.3](https://github.com/easy-form/react-form-simple/compare/v1.4.2...v1.4.3) (2024-03-14)

### Bug Fixes

- performance issues caused by excessive deletion operations ([#62](https://github.com/easy-form/react-form-simple/issues/62)) ([2ed5a73](https://github.com/easy-form/react-form-simple/commit/2ed5a73a062e09f8eba7280c0acf91dc1208b502))

## [1.4.2](https://github.com/easy-form/react-form-simple/compare/v1.4.1...v1.4.2) (2024-03-11)

### Bug Fixes

- `useSubscribe` subscribing to a field under a dynamic array form ([8fc9265](https://github.com/easy-form/react-form-simple/commit/8fc9265d83d96d80955f3c77e5eb46c189d4758b))

### Features

- adjusts the priority of the value attribute passed by `defineProps` ([ef2ae3b](https://github.com/easy-form/react-form-simple/commit/ef2ae3bb966c61014be55094f41ae99801342b79))

## [1.4.1](https://github.com/easy-form/react-form-simple/compare/v1.4.0...v1.4.1) (2024-02-05)

### Bug Fixes

- deleting certain item values incorrectly in dynamic arrays ([dd7f8c3](https://github.com/easy-form/react-form-simple/commit/dd7f8c3419ea68287e87a5acd64f9816f07fdc97))

## [1.4.0](https://github.com/easy-form/react-form-simple/compare/v1.3.9...v1.4.0) (2024-01-29)

### Bug Fixes

- incorrect data display in dynamic forms ([de656d8](https://github.com/easy-form/react-form-simple/commit/de656d83328f158e49162cf9c2e92691ff698179))

## [1.3.9](https://github.com/easy-form/react-form-simple/compare/v1.3.8...v1.3.9) (2024-01-28)

### Bug Fixes

- fix useSubscribe bug ([76b905e](https://github.com/easy-form/react-form-simple/commit/76b905e6492e82f3920f1811accd0e52ccffcd90))

## [1.3.8](https://github.com/easy-form/react-form-simple/compare/v1.3.7...v1.3.8) (2024-01-19)

### Bug Fixes

- fix reset bug ([ef0b036](https://github.com/easy-form/react-form-simple/commit/ef0b036a8ec78d09640a4dfbee215f71083489db))
- fix the bug of readOnlyText not dynamically rendering ([0e3e6f5](https://github.com/easy-form/react-form-simple/commit/0e3e6f561596ab38a8e2a837bda29394b5f1bb55))

### Features

- add type export ([353d4cf](https://github.com/easy-form/react-form-simple/commit/353d4cf83d13115e3de2bf59ec0b57ace45c3381))

## [1.3.7](https://github.com/easy-form/react-form-simple/compare/v1.3.5...v1.3.7) (2024-01-02)

### Bug Fixes

- fix bug with invalid externally defined attributes ([fcf5728](https://github.com/easy-form/react-form-simple/commit/fcf5728dc45f7c2ee80afb350d4adcd4fab4c990))
- fix reset bug when rendering form items in pop-up windows ([3135cc4](https://github.com/easy-form/react-form-simple/commit/3135cc4a7df3dd6bb7147e30db67e8e418d7ae93))

### Reverts

- Revert "chore: source repo use https" ([19374b0](https://github.com/easy-form/react-form-simple/commit/19374b0dc26bd9d6a8dc090ad6d28732df8eefaa))

## [1.3.6](https://github.com/easy-form/react-form-simple/compare/v1.3.5...v1.3.6) (2023-12-30)

### Bug Fixes

- Fix a bug in useSubscribe type return ([af373d2](https://github.com/easy-form/react-form-simple/commit/af373d2147937c3507322d7e9b3d3a74cfa739fa))
- Fix bug where onChange definition is overwritten on UI controls ([c9872c1](https://github.com/easy-form/react-form-simple/commit/c9872c19802d49220f64929320f025cae8609fe4))
- fix setValues api bug ([8038d81](https://github.com/easy-form/react-form-simple/commit/8038d81a1f4aedfd1a1bc1309cf77d700be55c83))

### Reverts

- Revert "chore: source repo use https" ([19374b0](https://github.com/easy-form/react-form-simple/commit/19374b0dc26bd9d6a8dc090ad6d28732df8eefaa))

## [1.3.5](https://github.com/easy-form/react-form-simple/compare/v1.3.4...v1.3.5) (2023-12-26)

### Bug Fixes

- fix the bug that prompts setState() method type incompatibility when using type UseFormReturnType ([2386dc0](https://github.com/easy-form/react-form-simple/commit/2386dc01ef693b78c3f359836419e1d69a3a1422))
- Fixed model type prompt error bug when using useWatch ([2801509](https://github.com/easy-form/react-form-simple/commit/2801509bd1c8b68e3d188cd1240e65d1828671fd))

### Features

- Optimize the release of memory resources after destruction when using useForm ([360f00b](https://github.com/easy-form/react-form-simple/commit/360f00b6ec1cc13872fab65a9ad3ff7edafcfa3b))

## [1.3.4](https://github.com/easy-form/react-form-simple/compare/v1.3.3...v1.3.4) (2023-12-25)

### Bug Fixes

- Fix label type error and add support for label passing in ReactNode type ([647e97c](https://github.com/easy-form/react-form-simple/commit/647e97cedd88e5e9ae19bcc684d1b5ce793bf722))

### Features

- Adding form atomic components can add style class names externally. ([6e5fa57](https://github.com/easy-form/react-form-simple/commit/6e5fa57bfe4bd903479879559d13c73a2876e29c))

## [1.3.3](https://github.com/easy-form/react-form-simple/compare/v1.3.2...v1.3.3) (2023-12-25)

### Bug Fixes

- fix a bug in the invalid direction setting of the Form component ([8c8d989](https://github.com/easy-form/react-form-simple/commit/8c8d98933ea38391b088a583c0fa924e20746816))

### Features

- add wxchat group code image ([6e64869](https://github.com/easy-form/react-form-simple/commit/6e6486938b93b0017a5171064215b649c5667627))
- update group imgage ([e3378f8](https://github.com/easy-form/react-form-simple/commit/e3378f88e8759b7aefa8498cd1d32124ea44e062))

## [1.3.2](https://github.com/easy-form/react-form-simple/compare/v1.3.1...v1.3.2) (2023-12-13)

### Bug Fixes

- typo for `destroy` ([#31](https://github.com/easy-form/react-form-simple/issues/31)) ([c6c4421](https://github.com/easy-form/react-form-simple/commit/c6c442198920c2cc11b8c99d54b9e7964f240f67))

## [1.3.1](https://github.com/easy-form/react-form-simple/compare/v1.3.0...v1.3.1) (2023-12-11)

### Bug Fixes

- fix types ([0ce34d2](https://github.com/easy-form/react-form-simple/commit/0ce34d2021e3b54fd020bd4de4ea600b6ad00a1f))

## [1.3.0](https://github.com/easy-form/react-form-simple/compare/v1.2.0...v1.3.0) (2023-12-08)

### Features

- add Form Item setError API ([c43f6e0](https://github.com/easy-form/react-form-simple/commit/c43f6e0b3b5221b86b77eec23c6aadf7b23b2a51))
- add setError API ([1397503](https://github.com/easy-form/react-form-simple/commit/1397503cadb8b1bfab5f772b36eefbe241c2b326))

## [1.2.0](https://github.com/easy-form/react-form-simple/compare/v1.1.0...v1.2.0) (2023-11-29)

### Features

- v1.1.1 ([603098a](https://github.com/easy-form/react-form-simple/commit/603098a7aad4116db273c01bf06071d7f99418b9))

## [1.1.0](https://github.com/easy-form/react-form-simple/compare/v1.0.0...v1.1.0) (2023-11-16)

### Features

- add firsr release version ([263e112](https://github.com/easy-form/react-form-simple/commit/263e112a2ac45b5e6948e0cc284a1c781042826a))

## [1.0.0](https://github.com/easy-form/react-form-simple/compare/v0.2.0...v1.0.0) (2023-11-16)

### ⚠ BREAKING CHANGES

- first release version

### Features

- add first release version v1.2.0 ([3eda5c4](https://github.com/easy-form/react-form-simple/commit/3eda5c49ab1b1bb0b98b5db2b95a1daa919ce3a0))

## [0.2.0](https://github.com/easy-form/react-form-simple/compare/v0.1.0...v0.2.0) (2023-11-16)

### Features

- add v1.10.0 ([7dd44e8](https://github.com/easy-form/react-form-simple/commit/7dd44e8b9faecf6c8d0953787ec3e8e2b1ef0646))
- add v1.10.0 ([daf11db](https://github.com/easy-form/react-form-simple/commit/daf11dbe927f429cd73603025b76d8c0c8b8c455))
- update version ([8ce9e53](https://github.com/easy-form/react-form-simple/commit/8ce9e53d96cf8f17bac1caeb4e7a89e0d0443965))

## [0.1.0](https://github.com/easy-form/react-form-simple/compare/v0.0.1...v0.1.0) (2023-11-16)

### Features

- add v1.1.0 or release or tag ([1322195](https://github.com/easy-form/react-form-simple/commit/1322195bdb6ae6a93f47a8232c6619b7124c96ad))
- add v1.1.0 or release or tags ([4b136e0](https://github.com/easy-form/react-form-simple/commit/4b136e0cae79d3efb706504831977a2c7484de80))
- add v1.1.0 or tag or release ([c7428c2](https://github.com/easy-form/react-form-simple/commit/c7428c2b6e3bdf8c6dc5ca1b1671e98e8c07c304))
- add v1.10.0 or release or tag ([271d8c1](https://github.com/easy-form/react-form-simple/commit/271d8c15dd254178217b95b49c1ee9bd77bd1cd7))
- add v1.10.0 or release or tag ([554e22b](https://github.com/easy-form/react-form-simple/commit/554e22b0733244dbe4be09afbceebc8e38ada434))
- add workflow ([8381abb](https://github.com/easy-form/react-form-simple/commit/8381abb070abe5e0b81738e9eb7556a181c0441e))

### Bug Fixes

- actions ([#3](https://github.com/easy-form/react-form-simple/issues/3)) ([e201ff4](https://github.com/easy-form/react-form-simple/commit/e201ff49b5a5763591a266785f5278530a9ed6d3))
