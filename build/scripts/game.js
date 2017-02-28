(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesGameOver = require('states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        _classCallCheck(this, Game);

        _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

        this.state.add('Boot', _statesBoot2['default'], false);
        this.state.add('Preload', _statesPreload2['default'], false);
        this.state.add('GameTitle', _statesGameTitle2['default'], false);
        this.state.add('Main', _statesMain2['default'], false);
        this.state.add('GameOver', _statesGameOver2['default'], false);

        this.state.start('Boot');
    }

    return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":4,"states/GameOver":5,"states/GameTitle":6,"states/Main":7,"states/Preload":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HelicopterObj = (function () {
    function HelicopterObj(game) {
        _classCallCheck(this, HelicopterObj);

        this.game = game;
        this.isRising = false;
        this.sprite = null;
    }

    _createClass(HelicopterObj, [{
        key: 'spawn',
        value: function spawn() {

            var helicopterSprite = new Phaser.Graphics(this.game).beginFill(Phaser.Color.hexToRGB('#2c3e50'), 1).drawRect(0, 0, 100, 100);

            var helicopterSpriteTexture = helicopterSprite.generateTexture();

            this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, helicopterSpriteTexture);
            this.game.physics.arcade.enable(this.sprite);
            this.sprite.enableBody = true;

            this.sprite.body.gravity.y = 5000;
            this.sprite.body.velocity.y = -1500;
            this.sprite.body.collideWorldBounds = false;

            this.sprite.anchor.setTo(0.5, 0.5);
        }
    }, {
        key: 'setRising',
        value: function setRising() {
            this.isRising = true;
        }
    }, {
        key: 'setFalling',
        value: function setFalling() {
            this.isRising = false;
        }
    }, {
        key: 'increaseVerticalVelocity',
        value: function increaseVerticalVelocity() {
            this.sprite.body.velocity.y -= 200;
        }
    }, {
        key: 'isOutOfBounds',
        value: function isOutOfBounds() {

            var position = this.sprite.body.position.y;

            return position > this.game.world.height || position < 0;
        }
    }]);

    return HelicopterObj;
})();

exports['default'] = HelicopterObj;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MovingWalls = (function () {
    function MovingWalls(game) {
        _classCallCheck(this, MovingWalls);

        this.game = game;
        this.wallGroup = null;
        this.spriteGroup = null;
        this.wallSpeed = 300;

        var seed = Date.now();
        this.random = new Phaser.RandomDataGenerator([seed]);

        this.initWalls();
    }

    _createClass(MovingWalls, [{
        key: 'initWalls',
        value: function initWalls() {

            this.wallHeight = this.random.integerInRange(20, this.game.world.height / 3);
            this.wallWidth = 200;

            var wallSprite = new Phaser.Graphics(this.game).beginFill(Phaser.Color.hexToRGB('#e74c3c'), 1).drawRect(0, 0, this.wallWidth, this.wallHeight);

            var wallSpriteTexture = wallSprite.generateTexture();

            this.spriteGroup = this.game.add.group();
            this.spriteGroup.enableBody = true;
            this.spriteGroup.createMultiple(10, wallSpriteTexture);
        }
    }, {
        key: 'spawn',
        value: function spawn() {

            var wall = this.spriteGroup.getFirstDead();

            wall.body.gravity.y = 0;

            wall.reset(this.game.world.width, this.random.integerInRange(0, this.game.world.height));

            wall.body.velocity.x = -this.wallSpeed;
            wall.body.immovable = true;

            //When the block leaves the screen, kill it
            wall.checkWorldBounds = true;
            wall.outOfBoundsKill = true;
        }
    }]);

    return MovingWalls;
})();

exports['default'] = MovingWalls;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        _get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Boot, [{
        key: "preload",
        value: function preload() {}
    }, {
        key: "create",
        value: function create() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start("Preload");
        }
    }]);

    return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
    _inherits(GameOver, _Phaser$State);

    function GameOver() {
        _classCallCheck(this, GameOver);

        _get(Object.getPrototypeOf(GameOver.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(GameOver, [{
        key: "create",
        value: function create() {}
    }, {
        key: "restartGame",
        value: function restartGame() {
            this.game.state.start("Main");
        }
    }]);

    return GameOver;
})(Phaser.State);

exports["default"] = GameOver;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
    _inherits(GameTitle, _Phaser$State);

    function GameTitle() {
        _classCallCheck(this, GameTitle);

        _get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(GameTitle, [{
        key: "create",
        value: function create() {}
    }, {
        key: "startGame",
        value: function startGame() {
            this.game.state.start("Main");
        }
    }]);

    return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsHelicopterObj = require('objects/HelicopterObj');

var _objectsHelicopterObj2 = _interopRequireDefault(_objectsHelicopterObj);

var _objectsMovingWalls = require('objects/MovingWalls');

var _objectsMovingWalls2 = _interopRequireDefault(_objectsMovingWalls);

var Main = (function (_Phaser$State) {
    _inherits(Main, _Phaser$State);

    function Main() {
        _classCallCheck(this, Main);

        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Main, [{
        key: 'create',
        value: function create() {

            //Enable Arcade Physics
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            //Set the games background colour
            this.game.stage.backgroundColor = '#cecece';

            this.helicopter = new _objectsHelicopterObj2['default'](this.game);
            this.helicopter.spawn();

            this.walls = new _objectsMovingWalls2['default'](this.game);

            this.addControls();
            this.addTimers();
        }
    }, {
        key: 'update',
        value: function update() {

            this.game.physics.arcade.overlap(this.helicopter.sprite, this.walls.spriteGroup, this.gameOver, null, this);

            // Check if out of bounds
            if (this.helicopter.isOutOfBounds()) {
                this.gameOver();
            }

            // Check if  helicopter is rising
            if (this.helicopter.isRising) {
                this.helicopter.increaseVerticalVelocity();
            }
        }
    }, {
        key: 'addControls',
        value: function addControls() {
            this.game.input.onDown.add(this.helicopter.setRising, this.helicopter);
            this.game.input.onUp.add(this.helicopter.setFalling, this.helicopter);
        }
    }, {
        key: 'addTimers',
        value: function addTimers() {
            this.game.time.events.loop(2000, this.walls.spawn, this.walls);
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            this.game.state.restart();
        }
    }]);

    return Main;
})(Phaser.State);

exports['default'] = Main;

//https://www.youtube.com/watch?v=Z3T3hNHq3ig  https://www.youtube.com/watch?v=xqAPokFsQac  https://www.youtube.com/watch?v=-VugMh3ES-g
module.exports = exports['default'];

},{"objects/HelicopterObj":2,"objects/MovingWalls":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        _get(Object.getPrototypeOf(Preload.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Preload, [{
        key: "preload",
        value: function preload() {
            /* Preload required assets */
            //this.game.load.image('myImage', 'assets/my-image.png');
            //this.game.load.audio('myAudio', 'assets/my-audio.wav');
            //this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
        }
    }, {
        key: "create",
        value: function create() {
            //NOTE: Change to GameTitle if required
            this.game.state.start("Main");
        }
    }]);

    return Preload;
})(Phaser.State);

exports["default"] = Preload;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
