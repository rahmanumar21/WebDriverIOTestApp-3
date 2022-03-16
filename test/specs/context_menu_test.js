describe('Example Page', () => {

          it('should open the url and check the menu', () => {

                    // open the url 
                    browser.url("https://the-internet.herokuapp.com/context_menu");

                    // declare
                    const contextMenu = $("hot-spot");

                    // execute
                    contextMenu.rightClick(2,3);

          });
});