Feature: End to End Ecommerce Validation

    Application Regression 

    @Regression
    Scenario: Ecommerce Products Delivery
    Given I open Ecommerce page
    When I add items to cart 
    When validate the total prices
    Then Select the country submit and verify thankyou  
    
    @Smoke
    Scenario: Filling the form to shop
    Given  I open Ecommerce page 
    When I fill the form details 
    | name| gender|
    | Bob | Male |
    Then validate the form behaviour
    And Select the shop page