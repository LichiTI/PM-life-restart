export default class Main extends ui.view.DefaultTheme.MainUI {
    constructor() {
        super();
        this.btnRemake.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.MODE));
        this.btnAchievement.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.ACHIEVEMENT));
        this.btnThanks.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.THANKS));
        this.btnGithub.on(Laya.Event.CLICK, this, goto, ['github']);
        this.btnDiscord.on(Laya.Event.CLICK, this, goto, ['discord']);
        this.btnThemes.on(Laya.Event.CLICK, this, ()=>$ui.showDialog(UI.pages.THEMES));
        this.btnSaveLoad.on(Laya.Event.CLICK, this, ()=>$ui.showDialog(UI.pages.SAVELOAD));

        // Add Talent List Button dynamically (Styled exactly like btnThanks/btnAchievement)
        this.btnTalentList = new Laya.runtime.ColorfulBox();
        this.btnTalentList.name = 'btnSmall'; // Use the same global style
        this.btnTalentList.width = 260;
        this.btnTalentList.height = 90;
        this.btnTalentList.right = 50;
        this.btnTalentList.top = 310;
        this.btnTalentList.anchorX = 0.5;
        this.btnTalentList.anchorY = 0.5;
        
        const label = new Laya.Label();
        label.name = 'label';
        label.text = $lang.UI_Talent_List || '天赋图鉴';
        label.fontSize = 50;
        label.font = 'SimHei';
        label.color = '#ffffff';
        label.centerX = 0;
        label.centerY = 0;
        label.anchorX = 0.5;
        label.anchorY = 0.5;
        this.btnTalentList.addChild(label);
        
        this.addChild(this.btnTalentList);
        this.btnTalentList.on(Laya.Event.CLICK, this, () => {
            import('./talentListDialog.js').then(module => {
                const dialog = new module.default();
                dialog.popup();
            });
        });
    }

    static load() {
        return [
            "images/atlas/images/icons.atlas",
        ]
    }

    init() {
        this.banner.visible =
        this.btnDiscord.visible =
        this.btnAchievement.visible =
        this.btnThanks.visible = !!core.times;
        const text = this.labSubTitle.text;
        this.labSubTitle.text = ' ';
        this.labSubTitle.text = text;
    }
}