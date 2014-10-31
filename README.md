authlete-component-client
=========================

Overview
--------

A UI component to display and configure properties of a third-party
client application hosted by Authlete.


License
-------

Apache License, Version 2.0


Note
----

The development just started. The web component does not function yet.


Set Up for Development
----------------------

#### 1. Install Git

Install [Git](http://git-scm.com/) if you don't have it yet.


#### 2. Install Node Package Manager

Install Node Package Manager (`npm` command) if you don't have it yet.
It is bundled in [Node.js](http://nodejs.org/).


#### 3. Install Bower

Install [Bower](http://bower.io/) if you don't have it yet.

```sh
$ npm install -g bower
```


#### 4. Install Python 3.x

Install [Python](https://www.python.org/) 3.x if you don't have it yet.


#### 5. Create a directory

It is recommended to create a dedicated directory to store web
components because `bower install` command you'll execute later
puts downloaded components in `../` directory.

```sh
$ mkdir component-development
$ cd component-development
```


#### 6. Download the component

```sh
$ git clone http://github.com/authlete/authlete-component-client.git
$ cd authlete-component-client
```


#### 7. Install dependencies

Install components which this component depends on. Note that the
downloaded components are put in `../` directory.

```sh
$ bower install
```


#### 8. See the demo

Start a local Web server

```sh
$ cd ..    # Back to `component-development` directory.
$ python -m http.server
```

and access [http://localhost:8000/authlete-component-client/demo.html]
(http://localhost:8000/authlete-component-client/demo.html).
