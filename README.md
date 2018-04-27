# Greenstand Treetracker Admin Panel

## For More information on [users, design intent and goals see wiki](https://github.com/Greenstand/treetracker-admin/wiki)

## Requirements

- Install Node
    - on OSX, install [home brew](http://brew.sh/) and type `brew install node`
    - on Windows, use the installer available at [nodejs.org](http://nodejs.org/)
    - On OSX you can alleviate the need to run as sudo by [following John Papa's instructions](http://jpapa.me/nomoresudo)
- Install PostgreSQL
    - on OSX, `brew install postgresql`
    - on Windows, use the install available [here](https://www.postgresql.org/download/windows/)
- Open terminal
- Type `npm --version` to see if `npm` has been successfull installed

## Commands

To run local web server on `http://localhost:3000/`.  This runs using a remote version of the admin api hosted on dev.treetracker.org

```
npm run start
```

To run both the admin api and the admin panel localy, with the admin panel still in development mode (not as optimized html), requires a more complex setup.

```
1. Install nginx
2. Use the nginx.conf file found in scripts/nginx.local.development.conf
3. Install the treetracker-admin-api repository
4. Launch treetracker-admin-api on port 3002 (export NODE_PORT=3002)
5. Launch the admin panel on port port 3003
6. Bring up the admin panel at http://localhost/admin/
7. Help improve the documentation of this process
```

To run a build of the codebase, packing it as optimized html

```
npm run build
```

To run unit tests

```
npm run test
```

This project was built using the [create-react-app](https://github.com/facebook/create-react-app) command line tool
