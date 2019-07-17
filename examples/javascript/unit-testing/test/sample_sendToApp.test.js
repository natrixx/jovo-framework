'use strict';
const { App, Util } = require('jovo-framework');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { Alexa } = require('jovo-platform-alexa');
// jest.setTimeout(500);


for (const p of [new Alexa, new GoogleAssistant()]) {
    const testSuite = p.makeTestSuite();

    describe(`PLATFORM: ${p.constructor.name} INTENTS` , () => {
        describe('when using runtime: "app" ' , () => {
            test('session data "someData" should not be in first response', async () => {
                const conversation = testSuite.conversation({
                    runtime: "app"
                });

                const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');
                const responseLaunchRequest = await conversation.send(launchRequest);

                const launchRequest2 = await testSuite.requestBuilder.intent('CheckPowerUserIntent');
                const responseLaunchRequest2 = await conversation.send(launchRequest2);

                expect(
                    responseLaunchRequest.hasSessionData('someData')
                ).toBe(false);


                expect(
                    responseLaunchRequest2.hasSessionData('someData')
                ).toBe(true);
            });

            test('session data "color" should only be in third response', async () => {
                const conversation = testSuite.conversation({
                    runtime: "app"
                });

                const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');
                const responseLaunchRequest = await conversation.send(launchRequest);

                const launchRequest2 = await testSuite.requestBuilder.intent('CheckPowerUserIntent');
                const responseLaunchRequest2 = await conversation.send(launchRequest2);

                const launchRequest3 = await testSuite.requestBuilder.intent('AskForFavColor');
                const responseLaunchRequest3 = await conversation.send(launchRequest3);

                expect(
                    responseLaunchRequest.hasSessionData('color')
                ).toBe(false);

                expect(
                    responseLaunchRequest2.hasSessionData('color')
                ).toBe(false);

                expect(
                    responseLaunchRequest3.hasSessionData('color')
                ).toBe(true);
            });
        });

        describe('when not using runtime: "app" ' , () => {
            test('session data "someData" should not be in first response', async () => {
                const conversation = testSuite.conversation();

                const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');
                const responseLaunchRequest = await conversation.send(launchRequest);

                const launchRequest2 = await testSuite.requestBuilder.intent('CheckPowerUserIntent');
                const responseLaunchRequest2 = await conversation.send(launchRequest2);

                expect(
                    responseLaunchRequest.hasSessionData('someData')
                ).toBe(false);


                expect(
                    responseLaunchRequest2.hasSessionData('someData')
                ).toBe(true);
            });

            test('session data "color" should only be in third response', async () => {
                const conversation = testSuite.conversation();

                const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');
                const responseLaunchRequest = await conversation.send(launchRequest);

                const launchRequest2 = await testSuite.requestBuilder.intent('CheckPowerUserIntent');
                const responseLaunchRequest2 = await conversation.send(launchRequest2);

                const launchRequest3 = await testSuite.requestBuilder.intent('AskForFavColor');
                const responseLaunchRequest3 = await conversation.send(launchRequest3);

                expect(
                    responseLaunchRequest.hasSessionData('color')
                ).toBe(false);

                expect(
                    responseLaunchRequest2.hasSessionData('color')
                ).toBe(false);

                expect(
                    responseLaunchRequest3.hasSessionData('color')
                ).toBe(true);
            });
        });
    });
}
