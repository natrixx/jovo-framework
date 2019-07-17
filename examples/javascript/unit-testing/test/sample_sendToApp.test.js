'use strict';
const { App, Util } = require('jovo-framework');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { Alexa } = require('jovo-platform-alexa');
// jest.setTimeout(500);


for (const p of [new Alexa(), new GoogleAssistant()]) {
    const testSuite = p.makeTestSuite();

    describe(`PLATFORM: ${p.constructor.name} INTENTS` , () => {
        describe('when using runtime: "app" ' , () => {
            beforeAll(async () => {
                const conversation = testSuite.conversation({
                    runtime: "app"
                });

                const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');
                global.responseLaunchRequest = await conversation.send(launchRequest);

                const launchRequest2 = await testSuite.requestBuilder.intent('CheckPowerUserIntent');
                global.responseLaunchRequest2 = await conversation.send(launchRequest2);

                const launchRequest3 = await testSuite.requestBuilder.intent('AskForFavColor');
                global.responseLaunchRequest3 = await conversation.send(launchRequest3);
            });

            test('first response does NOT have "someData"', async () => {
                expect(
                    global.responseLaunchRequest.hasSessionData('someData')
                ).toBe(false);
            });

            test('first response does NOT have "color"', async () => {
                expect(
                    global.responseLaunchRequest.hasSessionData('color')
                ).toBe(false);
            });

            test('second response does have "someData"', async () => {
                expect(
                    global.responseLaunchRequest2.hasSessionData('someData')
                ).toBe(true);
            });

            test('second response does NOT have "color"', async () => {
                expect(
                    global.responseLaunchRequest2.hasSessionData('color')
                ).toBe(false);
            });

            test('third response does have "someData"', async () => {
                expect(
                    global.responseLaunchRequest3.hasSessionData('someData')
                ).toBe(true);
            });

            test('third response does have "color"', async () => {
                expect(
                    global.responseLaunchRequest3.hasSessionData('color')
                ).toBe(true);
            });
        });

        describe('when NOT using runtime: "app" ' , () => {
            beforeAll(async () => {
                const conversation = testSuite.conversation();

                const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');
                global.responseLaunchRequest = await conversation.send(launchRequest);

                const launchRequest2 = await testSuite.requestBuilder.intent('CheckPowerUserIntent');
                global.responseLaunchRequest2 = await conversation.send(launchRequest2);

                const launchRequest3 = await testSuite.requestBuilder.intent('AskForFavColor');
                global.responseLaunchRequest3 = await conversation.send(launchRequest3);
            });

            test('first response does NOT have "someData"', async () => {
                expect(
                    global.responseLaunchRequest.hasSessionData('someData')
                ).toBe(false);
            });

            test('first response does NOT have "color"', async () => {
                expect(
                    global.responseLaunchRequest.hasSessionData('color')
                ).toBe(false);
            });

            test('second response does have "someData"', async () => {
                expect(
                    global.responseLaunchRequest2.hasSessionData('someData')
                ).toBe(true);
            });

            test('second response does NOT have "color"', async () => {
                expect(
                    global.responseLaunchRequest2.hasSessionData('color')
                ).toBe(false);
            });

            test('third response does have "someData"', async () => {
                expect(
                    global.responseLaunchRequest3.hasSessionData('someData')
                ).toBe(true);
            });

            test('third response does have "color"', async () => {
                expect(
                    global.responseLaunchRequest3.hasSessionData('color')
                ).toBe(true);
            });
        });
    });
}
