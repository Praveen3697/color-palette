import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked value = '';
  @tracked name = '';
  @tracked viewMode = false;

  @tracked isClicked = false;

  @tracked colors = [];

  @tracked rgb_colors = [];

  @action async onSubmit(e) {
    e.preventDefault();

    const data = {
      name: this.name,
      value: this.value,
    };

    var val = this.value;

    if (val.length == 4) {
      var a = val[1] + '0';
      var b = val[2] + '0';
      var c = val[3] + '0';

      var R = parseInt(a, 16);
      var G = parseInt(b, 16);
      var B = parseInt(c, 16);

      const rgb_val = `rgb(${R}, ${G}, ${B})`;

      const rgbData = {
        rgbName: this.name,
        rgbValue: rgb_val,
      };
      this.rgb_colors.pushObject(rgbData);
    } else {
      var a = val[1] + val[2];
      var b = val[3] + val[4];
      var c = val[5] + val[6];

      var R = parseInt(a, 16);
      var G = parseInt(b, 16);
      var B = parseInt(c, 16);

      const rgb_val = `rgb(${R}, ${G}, ${B})`;

      const rgbData = {
        rgbName: this.name,
        rgbValue: rgb_val,
      };
      this.rgb_colors.pushObject(rgbData);
    }

    this.colors.pushObject(data);

    // console.log(this.colors);

    this.value = '';
    this.name = '';
  }

  @action deleteComponent(index) {
    this.isClicked = !this.isClicked;

    this.colors.splice(index, 1);
    this.rgb_colors.splice(index, 1);

    // console.log(this.colors);
  }

  @action changeViewMode() {
    this.viewMode = true;
  }

  @action changeMode() {
    this.viewMode = false;
  }

  @action copyText(text) {
    navigator.clipboard.writeText(text);
    alert(`COLOR CODE COPIED!!!!! ${text}`);
  }
}
