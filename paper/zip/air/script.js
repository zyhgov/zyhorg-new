import { Pane } from 'https://cdn.skypack.dev/tweakpane';

const config = {
  play: false,
  steps: true,
  debug: false,
  transition: 0,
  height: 300,
  theme: 'system' };


const update = () => {
  document.documentElement.dataset.theme = config.theme;
  document.documentElement.dataset.steps = config.steps;
  document.documentElement.dataset.play = config.play;
  document.documentElement.dataset.debug = config.debug;
  document.documentElement.style.setProperty('--transition', config.transition);
  document.documentElement.style.setProperty('--height', config.height);
};

const sync = event => {
  if (
  !document.startViewTransition ||
  event.target.controller.view.labelElement.innerText !== 'Theme')

  return update();
  document.startViewTransition(() => update());
};

const ctrl = new Pane({
  title: 'Config',
  expanded: false });


ctrl.addBinding(config, 'play', { label: 'Play' });
ctrl.addBinding(config, 'steps', { label: 'Stepped' });
ctrl.addBinding(config, 'debug', { label: 'Debug' });
ctrl.addBinding(config, 'transition', {
  label: 'Transition (s)',
  min: 0,
  max: 2,
  step: 0.01 });

ctrl.addBinding(config, 'theme', {
  label: 'Theme',
  options: {
    System: 'system',
    Light: 'light',
    Dark: 'dark' } });



ctrl.on('change', sync);

update();