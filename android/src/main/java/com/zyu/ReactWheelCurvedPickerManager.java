package com.zyu;

import android.graphics.Color;

import com.aigestudio.wheelpicker.WheelPicker;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.ArrayList;
import java.util.Map;

/**
 * @author <a href="mailto:lesliesam@hotmail.com"> Sam Yu </a>
 */
public class ReactWheelCurvedPickerManager extends SimpleViewManager<ReactWheelCurvedPicker> {

    private static final String REACT_CLASS = "WheelCurvedPicker";

    private static final int DEFAULT_TEXT_SIZE = 25 * 2;
    private static final int DEFAULT_ITEM_SPACE = 300 * 2;
    private static final int DEFAULT_ITEM_ALIGN = 0;
    private static final int DEFAULT_INDICATOR_SIZE = 2 * 2;

    @Override
    protected ReactWheelCurvedPicker createViewInstance(ThemedReactContext reactContext) {
        ReactWheelCurvedPicker picker = new ReactWheelCurvedPicker(reactContext);
        picker.setItemTextColor(Color.LTGRAY);
        picker.setSelectedItemTextColor(Color.DKGRAY);
        picker.setItemTextSize(DEFAULT_TEXT_SIZE);
        picker.setItemSpace(DEFAULT_ITEM_SPACE);
        picker.setItemAlign(DEFAULT_ITEM_ALIGN);
        picker.setIndicatorSize(DEFAULT_INDICATOR_SIZE);

        return picker;
    }

    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                ItemSelectedEvent.EVENT_NAME, MapBuilder.of("registrationName", "onValueChange")
        );
    }

    @ReactProp(name="data")
    public void setData(ReactWheelCurvedPicker picker, ReadableArray items) {
        if (picker != null) {
            ArrayList<Integer> valueData = new ArrayList<>();
            ArrayList<String> labelData = new ArrayList<>();
            for (int i = 0; i < items.size(); i ++) {
                ReadableMap itemMap = items.getMap(i);
                valueData.add(itemMap.getInt("value"));
                labelData.add(itemMap.getString("label"));
            }
            picker.setValueData(valueData);
            picker.setData(labelData);
        }
    }

    @ReactProp(name="selectedIndex")
    public void setSelectedIndex(ReactWheelCurvedPicker picker, int index) {
        if (picker != null && picker.getState() == WheelPicker.SCROLL_STATE_IDLE) {
            picker.setSelectedItemPosition(index);
            picker.invalidate();
        }
    }

    @ReactProp(name="textColor", customType = "Color")
    public void setTextColor(ReactWheelCurvedPicker picker, Integer color) {
        if (picker != null) {
            picker.setSelectedItemTextColor(color);
            picker.setItemTextColor(color);
        }
    }

    @ReactProp(name="textSize")
    public void setTextSize(ReactWheelCurvedPicker picker, int size) {
        if (picker != null) {
            picker.setItemTextSize((int) PixelUtil.toPixelFromDIP(size));
        }
    }

    @ReactProp(name="itemSpace")
    public void setItemSpace(ReactWheelCurvedPicker picker, int space) {
        if (picker != null) {
            picker.setItemSpace((int) PixelUtil.toPixelFromDIP(space));
        }
    }
    @ReactProp(name="itemAlign")
    public void setItemAlign(ReactWheelCurvedPicker picker, int alignment) {
        if (picker != null) {
            picker.setItemAlign(alignment);
        }
    }


    @ReactProp(name="cyclic", defaultBoolean = false)
    public void setCyclic(ReactWheelCurvedPicker picker, boolean cyclic) {
        if (picker != null) {
            picker.setCyclic(cyclic);
        }
    }

    @ReactProp(name="curved", defaultBoolean = false)
    public void setCurved(ReactWheelCurvedPicker picker, boolean curved) {
        if (picker != null) {
            picker.setCurved(curved);
        }
    }

    @ReactProp(name="atmospheric", defaultBoolean = false)
    public void setAtmospheric(ReactWheelCurvedPicker picker, boolean atmospheric) {
        if (picker != null) {
            picker.setAtmospheric(atmospheric);
        }
    }

    @ReactProp(name="indicator", defaultBoolean = false)
    public void setIndicator(ReactWheelCurvedPicker picker, boolean indicator) {
        if (picker != null) {
            picker.setIndicator(indicator);
        }
    }

    @ReactProp(name="indicatorColor", customType = "Color")
    public void setIndicatorColor(ReactWheelCurvedPicker picker, Integer color) {
        if (picker != null) {
            picker.setIndicatorColor(color);
        }
    }

    @ReactProp(name="indicatorSize")
    public void setIndicatorSize(ReactWheelCurvedPicker picker, int size) {
        if (picker != null) {
            picker.setIndicatorSize((int) PixelUtil.toPixelFromDIP(size));
        }
    }


    @Override
    public String getName() {
        return REACT_CLASS;
    }
}
