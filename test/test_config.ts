import * as Chai from "chai";
import { DiscordBridgeConfig } from "../src/config";

// we are a test file and thus need those
/* tslint:disable:no-unused-expression max-file-line-count no-any */

const expect = Chai.expect;

describe("DiscordBridgeConfig.ApplyConfig", () => {
    it("should merge configs correctly", () => {
        const config = new DiscordBridgeConfig();
        config.ApplyConfig({
            bridge: {
                disableDeletionForwarding: true,
                disableDiscordMentions: false,
                disableTypingNotifications: true,
                enableSelfServiceBridging: false,
                homeserverUrl: "blah",
            },
            logging: {
                console: "warn",
            },
        });
        expect(config.bridge.homeserverUrl, "blah");
        expect(config.bridge.disableTypingNotifications).to.be.true;
        expect(config.bridge.disableDiscordMentions).to.be.false;
        expect(config.bridge.disableDeletionForwarding).to.be.true;
        expect(config.bridge.enableSelfServiceBridging).to.be.false;
        expect(config.logging.console, "warn");
    });
    it("should merge logging.files correctly", () => {
        const config = new DiscordBridgeConfig();
        config.ApplyConfig({
            logging: {
                console: "silent",
                files: [
                    {
                        file: "./bacon.log",
                    },
                ],
            },
        });
        expect(config.logging.files[0].file, "./bacon.log");
    });
});
