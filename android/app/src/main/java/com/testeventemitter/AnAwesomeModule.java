package com.testeventemitter;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class AnAwesomeModule extends ReactContextBaseJavaModule {
    private static final String EVENT_KEY = "eventFromJavaToJS";

    public AnAwesomeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AnAwesomeModule";
    }

    @ReactMethod
    public void anExposedMethod() {
        ReactContext currentContext = getReactApplicationContext();
        String eventName = "myAwesomeEvent";
        WritableMap params = Arguments.createMap();
        params.putString("type", "myEventType");

        sendEvent(currentContext, eventName, params);
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params){
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
