/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sunco = (function() {

    /**
     * Namespace sunco.
     * @exports sunco
     * @namespace
     */
    var sunco = {};

    sunco.Echoer = (function() {

        /**
         * Constructs a new Echoer service.
         * @memberof sunco
         * @classdesc Represents an Echoer
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Echoer(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Echoer.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Echoer;

        /**
         * Creates new Echoer service using the specified rpc implementation.
         * @function create
         * @memberof sunco.Echoer
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Echoer} RPC service. Useful where requests and/or responses are streamed.
         */
        Echoer.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link sunco.Echoer#echo}.
         * @memberof sunco.Echoer
         * @typedef EchoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Message} [response] Message
         */

        /**
         * Calls Echo.
         * @function echo
         * @memberof sunco.Echoer
         * @instance
         * @param {IMessage} request Message message or plain object
         * @param {sunco.Echoer.EchoCallback} callback Node-style callback called with the error, if any, and Message
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Echoer.prototype.echo = function echo(request, callback) {
            return this.rpcCall(echo, $root.Message, $root.Message, request, callback);
        }, "name", { value: "Echo" });

        /**
         * Calls Echo.
         * @function echo
         * @memberof sunco.Echoer
         * @instance
         * @param {IMessage} request Message message or plain object
         * @returns {Promise<Message>} Promise
         * @variation 2
         */

        return Echoer;
    })();

    return sunco;
})();

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {string|null} [name] Message name
     * @property {string|null} [text] Message text
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message name.
     * @member {string} name
     * @memberof Message
     * @instance
     */
    Message.prototype.name = "";

    /**
     * Message text.
     * @member {string} text
     * @memberof Message
     * @instance
     */
    Message.prototype.text = "";

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.text != null && message.hasOwnProperty("text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.name != null)
            message.name = String(object.name);
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.text = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Message;
})();

module.exports = $root;
