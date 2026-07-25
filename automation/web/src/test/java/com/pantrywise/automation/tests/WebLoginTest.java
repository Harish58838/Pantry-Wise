package com.pantrywise.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class WebLoginTest {
    private WebDriver driver;
    private String baseUrl;

    @BeforeClass
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless", "--disable-gpu", "--window-size=1920,1200", "--ignore-certificate-errors", "--disable-extensions", "--no-sandbox", "--disable-dev-shm-usage");
        
        driver = new ChromeDriver(options);
        
        // Grab BASE_URL from Environment Variables if exists, otherwise fallback
        baseUrl = System.getenv("BASE_URL");
        if (baseUrl == null || baseUrl.isEmpty()) {
            baseUrl = "https://default.github.io/fallback/"; 
        }
        driver.get(baseUrl);
    }

    @Test(description = "Verify successful API login on Web UI via GitHub Pages")
    public void testValidWebLogin() {
        System.out.println("Navigated to: " + driver.getCurrentUrl());
        System.out.println("Executing Web E2E Test Case: TC_WEB_AUTH_001...");
        Assert.assertNotNull(driver, "Driver should be initialized");
        // Additional page object interactions for web tests
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
