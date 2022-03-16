describe('Checkbox Test', () => {

          it('should checked the 1st checkbox', () => {

                    browser.url("https://the-internet.herokuapp.com/checkboxes");
                    expect(browser).toHaveTitle("The Internet");

                    // declare
                    let checkbox1 = $("#checkboxes input:nth-child(1)");
                    checkbox1.click();

          });
});