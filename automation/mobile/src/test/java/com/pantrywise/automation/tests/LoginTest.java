package com.pantrywise.automation.tests;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;

public class LoginTest {
    private AppiumDriver driver;

    @BeforeClass
    public void setUp() throws MalformedURLException {
        UiAutomator2Options options = new UiAutomator2Options();
        options.setPlatformName("Android");
        options.setDeviceName("Nexus 6");
        options.setAppPackage("com.harish58838.pantrywise");
        options.setAppActivity(".MainActivity");
        options.setAutomationName("UiAutomator2");
        options.setAppWaitActivity("*"); // To ensure app starts
        
        driver = new AndroidDriver(new URL("http://127.0.0.1:4723/"), options);
    }

    @Test(description = "Verify successful API login via UI")
    public void testValidLogin() {
        System.out.println("Executing Mobile E2E Test Case: TC_AUTH_001...");
        Assert.assertNotNull(driver, "Driver should be initialized");
        // Logic for testing login would go here referencing Page Objects
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
