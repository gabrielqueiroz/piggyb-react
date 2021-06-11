import React from 'react'

const MenuToolbar = () => {
  return (
    <header class=" mdc-top-app-bar mdc-top-app-bar--fixed">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded">menu</button><span class="mdc-top-app-bar__title">PiggyBanks</span> </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        </section>
      </div>
    </header>
  )
};

export default MenuToolbar
