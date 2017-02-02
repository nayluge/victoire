import TrowelModals from './ui-components/modals';
import MDFormGroups from './ui-components/forms';
import TrowelDrops from './ui-components/drops';
import ModeDrops from './ui-components/modeDrops';
import TrowelCollapses from './ui-components/collapses';
import Slots from './ui-components/slots';

export default class Initiator {
    constructor() {
        const modals = new TrowelModals(document.querySelectorAll('[data-flag*="v-modal"]'));
        const mdForm = new MDFormGroups(document.querySelectorAll('[data-flag*="v-mdForm"]'));
        const drops = new TrowelDrops(document.querySelectorAll('[data-flag*="v-drop"]'));
        const collapses = new TrowelCollapses(document.querySelectorAll('[data-flag*="v-collapse"]'));
        const slots = new Slots(document.querySelectorAll('.v-slot'));
        const modeDrops = new ModeDrops(document.querySelectorAll('[data-flag*="v-mode-drop"]'));
    }
}
