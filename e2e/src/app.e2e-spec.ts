import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Welcome to sliderAngular!');
=======
    expect(page.getTitleText()).toEqual('Welcome to slider!');
>>>>>>> 96ca60485eb698093e9e16fa50621c151343a1f7
  });
});
