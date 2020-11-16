import { Component, h, Prop } from '@stencil/core';

@Component({
  styleUrl: 'logo-bmg.css',
  tag: 'ia-logo-bmg',
  shadow: true,
})
export class LogoBMG {
  @Prop() big?: boolean;

  get styleClass() {
    return this.big ? 'logo-bmg--big' : 'logo-bmg';
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92 47"
        class={this.styleClass}
      >
        <g fill="none">
          <path
            fill="#000"
            d="M33.494 2.684c0 .235-.027.441-.08.618a1.534 1.534 0 01-.219.456 1.22 1.22 0 01-.32.31 1.484 1.484 0 01-.38.176v.02c.161.032.311.094.45.186.14.092.262.206.366.343.104.138.187.3.25.486.062.186.093.39.093.613 0 .268-.041.514-.124.736a1.521 1.521 0 01-.388.579c-.175.163-.397.29-.664.382a2.936 2.936 0 01-.953.138h-1.258V.957h1.185c.363 0 .673.041.932.123.258.082.47.198.637.348.166.15.286.332.36.545.075.212.112.45.112.711zm-.784.03c0-.315-.101-.573-.303-.776-.202-.202-.52-.304-.954-.304h-.41V3.97h.401c.416 0 .731-.111.945-.333.214-.223.32-.53.32-.923zm.116 3.12c0-.367-.109-.656-.326-.869-.216-.213-.527-.319-.93-.319h-.527V7.02h.482c.457 0 .788-.1.993-.299.205-.2.308-.495.308-.888zm4.776 1.893h-.66v-.53h-.018a.925.925 0 01-.115.172 1.25 1.25 0 01-.228.216 1.475 1.475 0 01-.334.181c-.13.052-.276.079-.436.079-.19 0-.361-.032-.513-.094a.94.94 0 01-.387-.299 1.435 1.435 0 01-.245-.535 3.268 3.268 0 01-.085-.809v-3.09h.722v3.031c0 .393.058.672.174.839.115.167.295.25.539.25a.807.807 0 00.525-.172c.143-.114.256-.227.339-.338v-3.61h.722v4.709zm3.44 0V4.695c0-.399-.062-.685-.183-.858-.122-.174-.308-.26-.557-.26a.817.817 0 00-.535.176 2.091 2.091 0 00-.339.344v3.63h-.721v-4.71h.659v.53h.018a.945.945 0 01.116-.171c.059-.076.136-.148.231-.216.095-.069.208-.13.339-.182.13-.052.28-.078.445-.078.19 0 .363.03.517.093a.924.924 0 01.392.3c.107.137.19.315.25.534.06.22.089.489.089.81v3.09h-.722zm1.603-2.286c0-.478.057-.877.17-1.197a2.24 2.24 0 01.436-.775 1.51 1.51 0 01.606-.417 1.97 1.97 0 01.677-.123c.137 0 .256.012.357.035.1.022.184.05.25.083V.79l.72-.088v7.025h-.659v-.5h-.017a1.096 1.096 0 01-.606.544 1.17 1.17 0 01-.437.074c-.202 0-.393-.045-.575-.133a1.27 1.27 0 01-.476-.422 2.307 2.307 0 01-.326-.745 4.398 4.398 0 01-.12-1.104zm1.693 1.697a.868.868 0 00.535-.172 1.066 1.066 0 00.267-.289V3.773a1.03 1.03 0 00-.227-.118.942.942 0 00-.325-.049c-.167 0-.323.031-.468.093a.93.93 0 00-.379.31c-.107.143-.191.33-.254.559-.062.229-.093.51-.093.843 0 .327.025.6.075.82.05.219.12.395.21.53a.756.756 0 00.659.377zm5.373-2.531c0 .203-.006.378-.018.525-.011.147-.023.276-.035.387h-2.183c.023.556.132.965.325 1.227.193.261.47.392.833.392.125 0 .238-.016.339-.049a1.255 1.255 0 00.561-.363l.267.56-.133.142c-.06.062-.14.124-.24.186a1.688 1.688 0 01-.901.231c-.267 0-.51-.05-.726-.148a1.387 1.387 0 01-.552-.456 2.28 2.28 0 01-.353-.785 4.565 4.565 0 01-.124-1.143c0-.418.043-.78.129-1.084.086-.304.203-.554.352-.75.148-.197.32-.342.517-.437a1.43 1.43 0 01.632-.142c.41 0 .731.142.963.427.231.284.347.71.347 1.28zm-1.354-1.06c-.256 0-.46.118-.615.354-.154.235-.244.575-.267 1.02h1.56c.005-.033.01-.08.012-.142.003-.062.005-.13.005-.201 0-.328-.06-.581-.178-.76a.583.583 0 00-.517-.27zm4.161.422a1.85 1.85 0 00-.258-.24.755.755 0 00-.49-.152c-.19 0-.336.049-.437.147a.474.474 0 00-.151.353c0 .177.046.322.138.437.092.114.233.237.423.368l.267.176c.291.19.52.394.686.613.167.22.25.502.25.85 0 .372-.118.686-.352.94-.235.256-.572.384-1.011.384-.173 0-.324-.02-.455-.06a1.829 1.829 0 01-.343-.137 1.134 1.134 0 01-.245-.171 1.702 1.702 0 01-.16-.172l.347-.628c.036.04.079.085.13.137.05.053.11.103.182.152.071.05.151.09.24.123.09.033.194.05.312.05.214 0 .378-.053.49-.158a.5.5 0 00.17-.382.958.958 0 00-.04-.29.682.682 0 00-.12-.22 1.179 1.179 0 00-.197-.187 9.787 9.787 0 00-.267-.196l-.267-.187a2.662 2.662 0 01-.628-.598c-.152-.21-.228-.478-.228-.805 0-.176.032-.338.094-.485.062-.147.15-.275.263-.383a1.259 1.259 0 01.882-.348c.166 0 .309.018.428.054a1.26 1.26 0 01.521.304c.056.056.102.103.138.142l-.312.57zm3.52 3.758V4.695c0-.386-.05-.664-.152-.834-.1-.17-.264-.255-.49-.255a.931.931 0 00-.316.05 1.02 1.02 0 00-.432.284 2.689 2.689 0 00-.134.157v3.63h-.722v-4.71h.66v.53h.018c.03-.052.074-.116.133-.19a1.212 1.212 0 01.535-.388 1.1 1.1 0 01.4-.07c.488 0 .833.21 1.034.629.042-.066.098-.136.17-.211a1.353 1.353 0 01.57-.358c.119-.04.25-.06.392-.06.867 0 1.301.557 1.301 1.669v3.159h-.722V4.695c0-.386-.062-.664-.187-.834-.125-.17-.309-.255-.552-.255a.777.777 0 00-.504.162 1.986 1.986 0 00-.316.31 2.859 2.859 0 01.036.49v3.159h-.722zm4.767 0h-.722v-4.71h.722v4.71zm-.356-5.847a.447.447 0 01-.357-.157.616.616 0 01-.133-.413.6.6 0 01.133-.402.448.448 0 01.357-.157c.142 0 .258.053.347.157.09.105.134.239.134.402 0 .17-.045.308-.134.413a.437.437 0 01-.347.157zm3.796 5.847V4.695c0-.399-.061-.685-.183-.858-.122-.174-.308-.26-.557-.26a.817.817 0 00-.535.176 2.081 2.081 0 00-.338.344v3.63h-.722v-4.71h.66v.53h.017a1.13 1.13 0 01.348-.387 1.56 1.56 0 01.338-.182c.13-.052.28-.078.446-.078.19 0 .362.03.517.093a.93.93 0 01.392.3c.107.137.19.315.25.534.059.22.088.489.088.81v3.09h-.721zm2.521 0h-.722v-4.71h.722v4.71zM66.41 1.88a.448.448 0 01-.357-.157.616.616 0 01-.133-.413.6.6 0 01.133-.402.448.448 0 01.357-.157c.142 0 .258.053.347.157.09.105.134.239.134.402 0 .17-.045.308-.134.413a.437.437 0 01-.347.157zm3.306 2.09a1.805 1.805 0 00-.259-.241.753.753 0 00-.49-.152c-.19 0-.335.049-.436.147a.475.475 0 00-.152.353c0 .177.046.322.138.437.092.114.233.237.423.368l.268.176c.29.19.52.394.686.613.166.22.25.502.25.85 0 .372-.118.686-.353.94-.234.256-.571.384-1.01.384-.173 0-.325-.02-.455-.06a1.801 1.801 0 01-.343-.137 1.134 1.134 0 01-.245-.171 1.497 1.497 0 01-.16-.172l.347-.628c.035.04.078.085.129.137.05.053.111.103.183.152.07.05.151.09.24.123a.9.9 0 00.312.05c.214 0 .377-.053.49-.158a.5.5 0 00.17-.382.958.958 0 00-.04-.29.684.684 0 00-.121-.22 1.134 1.134 0 00-.196-.187 9.787 9.787 0 00-.267-.196l-.268-.187a2.701 2.701 0 01-.628-.598c-.151-.21-.227-.478-.227-.805 0-.176.031-.338.093-.485.063-.147.15-.275.263-.383a1.266 1.266 0 01.882-.348c.167 0 .31.018.428.054a1.25 1.25 0 01.521.304c.057.056.103.103.139.142l-.312.57zm3.1-.305h-.935v2.61c0 .333.039.56.116.682.077.12.208.181.392.181a.698.698 0 00.276-.049.946.946 0 00.17-.088l.097.638a1.035 1.035 0 01-.668.206c-.368 0-.644-.113-.829-.339-.184-.226-.276-.6-.276-1.123V3.665h-.517v-.53l.517-.117.08-1.315h.642v1.315h1.025l-.09.647zm3.502.942c0 .203-.005.378-.017.525a15.03 15.03 0 01-.036.387h-2.183c.024.556.132.965.325 1.227.193.261.471.392.833.392.125 0 .238-.016.339-.049a1.232 1.232 0 00.45-.255c.05-.046.088-.082.111-.108l.268.56-.134.142c-.06.062-.14.124-.24.186a1.668 1.668 0 01-.375.162 1.784 1.784 0 01-.526.069c-.267 0-.509-.05-.726-.148-.217-.098-.4-.25-.552-.456a2.26 2.26 0 01-.352-.785 4.561 4.561 0 01-.125-1.143c0-.418.043-.78.13-1.084.085-.304.203-.554.351-.75.149-.197.32-.342.517-.437.196-.095.407-.142.633-.142.41 0 .73.142.962.427.232.284.347.71.347 1.28zm-1.354-1.06c-.255 0-.46.118-.615.354-.154.235-.243.575-.267 1.02h1.56c.005-.033.01-.08.013-.142.003-.062.004-.13.004-.201 0-.328-.06-.581-.178-.76a.581.581 0 00-.517-.27zm4.197.167a.462.462 0 00-.116-.049.78.78 0 00-.24-.03c-.226 0-.403.068-.53.202-.128.134-.219.28-.272.436v3.454h-.722v-4.71h.66v.638h.017c.03-.091.068-.181.116-.27a.952.952 0 01.178-.235.767.767 0 01.254-.162.93.93 0 01.352-.059.82.82 0 01.245.03l.147.049-.089.706zm1.435 4.013h-.722v-4.71h.722v4.71zm-.357-5.847a.446.446 0 01-.356-.157.61.61 0 01-.134-.413.6.6 0 01.134-.402.446.446 0 01.356-.157c.143 0 .259.053.348.157a.6.6 0 01.133.402c0 .17-.044.308-.133.413a.439.439 0 01-.348.157zm4.455 5.847h-.659v-.53h-.018a1.21 1.21 0 01-.343.388 1.475 1.475 0 01-.334.181c-.13.052-.276.079-.437.079-.19 0-.36-.032-.512-.094a.95.95 0 01-.388-.299 1.467 1.467 0 01-.245-.535 3.322 3.322 0 01-.084-.809v-3.09h.722v3.031c0 .393.058.672.173.839.116.167.296.25.54.25a.809.809 0 00.525-.172c.143-.114.256-.227.339-.338v-3.61h.721v4.709zm3.35 0V4.695c0-.386-.05-.664-.15-.834-.102-.17-.265-.255-.49-.255a.933.933 0 00-.317.05 1.02 1.02 0 00-.432.284 2.689 2.689 0 00-.134.157v3.63h-.722v-4.71h.66v.53h.018c.03-.052.074-.116.133-.19a1.212 1.212 0 01.535-.388 1.1 1.1 0 01.4-.07c.488 0 .833.21 1.035.629.041-.066.098-.136.169-.211a1.353 1.353 0 01.57-.358c.119-.04.25-.06.392-.06.868 0 1.301.557 1.301 1.669v3.159h-.722V4.695c0-.386-.062-.664-.187-.834-.124-.17-.309-.255-.552-.255a.777.777 0 00-.504.162 1.986 1.986 0 00-.316.31 2.859 2.859 0 01.036.49v3.159h-.722zm-56.127 5.831h-.874v4.062h-.721v-4.062h-.517v-.53l.517-.107v-.942c0-.255.032-.474.098-.657.065-.184.151-.334.258-.452a.954.954 0 01.374-.255c.143-.052.294-.078.455-.078.154 0 .285.023.392.068.107.046.178.082.214.108l-.152.658a.822.822 0 00-.151-.084.578.578 0 00-.24-.044c-.173 0-.304.059-.393.177-.089.117-.134.333-.134.647v.844h.963l-.09.647zm3.707 4.062h-.66v-.53h-.018a1.21 1.21 0 01-.343.388c-.092.069-.203.13-.334.181a1.15 1.15 0 01-.437.079c-.19 0-.36-.031-.512-.093a.934.934 0 01-.387-.3 1.438 1.438 0 01-.246-.534 3.336 3.336 0 01-.084-.81v-3.09h.722v3.032c0 .392.058.672.173.838.116.167.296.25.54.25a.814.814 0 00.525-.171 1.9 1.9 0 00.339-.339v-3.61h.722v4.71zm-1.774-6.063c0 .15-.041.271-.124.363a.395.395 0 01-.303.137.39.39 0 01-.303-.137c-.084-.092-.125-.213-.125-.363s.041-.271.125-.363a.392.392 0 01.303-.137c.118 0 .22.045.303.137a.521.521 0 01.124.363zm1.373 0c0 .15-.042.271-.125.363-.083.092-.184.137-.303.137s-.22-.045-.303-.137c-.083-.092-.125-.213-.125-.363s.042-.271.125-.363c.083-.092.184-.137.303-.137s.22.045.303.137a.521.521 0 01.125.363zm3.386 2.05a.526.526 0 00-.116-.049.784.784 0 00-.24-.029c-.227 0-.403.067-.531.201s-.218.28-.272.437v3.453h-.722v-4.71h.66v.639h.018c.03-.092.068-.182.115-.27a.961.961 0 01.179-.236.781.781 0 01.254-.161.929.929 0 01.352-.06c.1 0 .182.01.245.03.062.02.111.036.147.05l-.09.706zm6.326 3.562a1.872 1.872 0 01-.512.338 2.621 2.621 0 01-1.11.231c-.35 0-.675-.06-.975-.182-.3-.12-.559-.318-.775-.593-.217-.275-.387-.64-.508-1.094-.122-.455-.183-1.015-.183-1.683 0-.634.076-1.17.227-1.609.152-.438.35-.794.597-1.069.247-.275.526-.473.838-.594.312-.12.63-.181.958-.181.231 0 .429.023.592.069.164.045.303.101.419.166.116.066.21.131.28.197.072.065.131.12.179.166l-.365.599a2.834 2.834 0 00-.134-.133 1.185 1.185 0 00-.227-.161 1.515 1.515 0 00-.78-.197c-.232 0-.453.046-.664.138-.21.091-.396.245-.557.46-.16.217-.29.5-.387.85-.098.35-.147.783-.147 1.3 0 .51.035.943.107 1.3.07.356.178.647.32.872.143.226.318.39.526.491.208.101.451.152.73.152.155 0 .3-.016.437-.049s.259-.072.366-.118v-1.972h-.98v-.677h1.728v2.983zM48.74 14.5c0 .203-.006.378-.018.525-.012.147-.024.277-.035.388h-2.184c.024.556.133.964.326 1.226s.47.393.833.393c.125 0 .237-.017.338-.05a1.21 1.21 0 00.45-.255 1.55 1.55 0 00.112-.108l.267.56c-.03.032-.074.08-.134.142a1.22 1.22 0 01-.24.186 1.658 1.658 0 01-.374.162 1.789 1.789 0 01-.526.069c-.267 0-.51-.05-.726-.147a1.39 1.39 0 01-.553-.457 2.301 2.301 0 01-.352-.784 4.573 4.573 0 01-.125-1.143c0-.419.044-.78.13-1.084.086-.305.203-.555.352-.75.148-.197.32-.343.516-.438.197-.094.407-.142.633-.142.41 0 .73.142.962.427.232.284.348.711.348 1.28zm-1.354-1.06c-.256 0-.46.118-.615.354-.155.235-.244.575-.268 1.02h1.56c.006-.032.01-.08.013-.142.003-.062.005-.13.005-.201 0-.327-.06-.58-.179-.76a.579.579 0 00-.516-.27zm4.16.423a1.685 1.685 0 00-.258-.24.748.748 0 00-.49-.153c-.19 0-.335.05-.436.147a.476.476 0 00-.152.354c0 .176.046.322.138.436.092.115.234.237.424.368l.267.177c.291.19.52.394.686.613.166.219.25.502.25.848 0 .373-.118.687-.352.942-.235.255-.572.383-1.012.383-.172 0-.324-.02-.454-.059a1.975 1.975 0 01-.343-.137 1.136 1.136 0 01-.245-.172 1.497 1.497 0 01-.16-.172l.347-.628c.035.04.079.085.13.138a1.143 1.143 0 00.422.274.9.9 0 00.312.05c.214 0 .377-.053.49-.157a.504.504 0 00.17-.383.963.963 0 00-.04-.29.692.692 0 00-.12-.22 1.179 1.179 0 00-.197-.187 9.787 9.787 0 00-.267-.196l-.268-.186a2.704 2.704 0 01-.628-.599c-.151-.21-.227-.477-.227-.804 0-.177.031-.339.094-.486.062-.147.15-.275.262-.383a1.27 1.27 0 01.883-.348c.166 0 .309.018.427.054a1.217 1.217 0 01.522.304c.056.056.102.103.138.143l-.312.569zm4.27 3.757h-.66v-.53h-.018a1.242 1.242 0 01-.343.388 1.42 1.42 0 01-.334.181 1.157 1.157 0 01-.437.079c-.19 0-.36-.031-.512-.093a.931.931 0 01-.388-.3 1.437 1.437 0 01-.245-.534 3.331 3.331 0 01-.085-.81v-3.09h.722v3.032c0 .392.058.672.174.838.116.167.295.25.539.25a.817.817 0 00.526-.171c.142-.115.255-.227.338-.339v-3.61h.722v4.71zm3.439 0v-3.03c0-.4-.061-.686-.183-.859-.122-.173-.308-.26-.557-.26a.812.812 0 00-.535.177 2.041 2.041 0 00-.338.343v3.63h-.722v-4.71h.66v.53h.017a1.188 1.188 0 01.348-.387c.095-.069.208-.129.338-.181.131-.053.28-.079.446-.079.19 0 .362.031.517.093a.938.938 0 01.392.3c.107.137.19.315.25.534.059.22.088.49.088.81v3.09h-.721zm1.603-2.286c0-.477.057-.876.17-1.197.113-.32.258-.579.436-.775.179-.196.38-.335.606-.417.226-.081.452-.122.678-.122.136 0 .255.011.356.034.101.023.184.05.25.083v-2.256l.721-.088v7.024h-.66v-.5h-.017a1.095 1.095 0 01-.606.544 1.17 1.17 0 01-.437.074c-.201 0-.393-.044-.574-.133a1.27 1.27 0 01-.477-.421 2.291 2.291 0 01-.325-.746 4.392 4.392 0 01-.12-1.104zm1.694 1.698a.865.865 0 00.302-.05.862.862 0 00.232-.122 1.07 1.07 0 00.267-.29v-2.904a.914.914 0 00-.552-.167c-.166 0-.322.032-.468.094a.917.917 0 00-.378.309c-.107.144-.192.33-.254.56a3.22 3.22 0 00-.094.843c0 .327.025.6.076.819.05.22.12.396.21.53.088.134.19.23.302.29a.772.772 0 00.357.088zm4.963.588v-3.03c0-.4-.061-.686-.183-.859-.122-.173-.307-.26-.557-.26a.807.807 0 00-.534.177 2.06 2.06 0 00-.34.343v3.63h-.72v-6.936l.72-.088v2.796h.019c.023-.04.06-.092.111-.157.05-.066.12-.131.21-.197.089-.065.197-.122.325-.171.127-.05.277-.074.45-.074.374 0 .671.134.89.402.22.269.33.713.33 1.335v3.09h-.721zm4.544-3.12c0 .203-.006.378-.018.525-.012.147-.023.277-.035.388h-2.183c.023.556.132.964.325 1.226s.47.393.833.393c.125 0 .238-.017.339-.05a1.255 1.255 0 00.561-.363l.267.56-.133.142a1.23 1.23 0 01-.241.186 1.658 1.658 0 01-.374.162 1.789 1.789 0 01-.526.069c-.267 0-.51-.05-.726-.147a1.39 1.39 0 01-.553-.457 2.32 2.32 0 01-.352-.784 4.576 4.576 0 01-.124-1.143c0-.419.043-.78.129-1.084.086-.305.203-.555.352-.75.148-.197.32-.343.517-.438.196-.094.407-.142.632-.142.41 0 .731.142.963.427.231.284.347.711.347 1.28zm-1.354-1.06c-.256 0-.46.118-.615.354-.155.235-.244.575-.267 1.02h1.559c.006-.032.01-.08.013-.142.003-.062.005-.13.005-.201 0-.327-.06-.58-.178-.76a.583.583 0 00-.517-.27zm3.038 4.18h-.721v-4.71h.721v4.71zm-.356-5.847a.445.445 0 01-.357-.157.615.615 0 01-.133-.412c0-.164.044-.298.133-.402a.445.445 0 01.357-.157c.142 0 .258.052.347.157.09.104.134.238.134.402 0 .17-.045.307-.134.412a.433.433 0 01-.347.157zm3.288 1.785h-.936v2.61c0 .334.039.561.116.682.077.121.208.182.392.182.107 0 .2-.017.276-.05a.855.855 0 00.17-.088l.098.638a1.048 1.048 0 01-.669.206c-.368 0-.644-.113-.828-.339-.184-.225-.276-.6-.276-1.123v-2.718h-.517v-.53l.517-.117.08-1.315h.641v1.315h1.025l-.09.647zM10.379 7.767a4.55 4.55 0 00.03-.514c0-.097 0-.208-.01-.335 1.362-.02 2.557-1.09 2.557-2.32 0-.624-.374-1.097-.586-1.379.047-.01.095-.023.144-.035.2.189.766.86.766 1.708 0 1.475-1.354 2.844-2.9 2.875M9.005 2.63a1.065 1.065 0 00-.17-.441c.005-.15.061-.294.284-.176-.12.134-.028.372-.028.372s.246-.125.195-.302c.365.095.103.63-.28.547m-.317.758a1.628 1.628 0 00-.285-.618c-.12-.155-.32-.338-.587-.338-.123 0-.328.062-.458.122-.049-.096-.144-.33-.144-.434 0-.108.168-.218.488-.218.706 0 1.127.347 1.127.93 0 .204-.074.39-.141.556m1.812 9.902c.082 0 .121.014.17.034.202.601.985 1.737 1.018 1.785l.007.01.011-.003a7.118 7.118 0 011.093-.114h.01c.044 0 .095 0 .127.035.026.029.04.08.04.152 0 .11-.044.3-.096.382-.143-.17-.376-.248-.75-.248-.112 0-.245.037-.316.058l-.03.006-.033.01.215.235c.332.361.62.673.62.881 0 .125-.112.288-.215.36-.023-.38-.375-.89-.72-1.174l-.029-.024-.005.134c-.005.09-.013.227-.013.373 0 .724-.067.834-.298.834a.373.373 0 01-.123-.024c.13-.175.181-.406.181-.81l-.002-.188-.002-.15c0-.166.016-.29.028-.388l.007-.056-.036-.005a3.333 3.333 0 00-.462-.046c-.328 0-.551.032-.713.198-.106-.094-.216-.256-.216-.358 0-.15.086-.163.2-.163.057 0 .11.01.185.019.141.023.354.057.792.057h.027l-.009-.029c-.11-.346-.415-.85-.904-1.496.044-.174.087-.287.24-.287m-4.221 1.783l-.009.03h.027c.438 0 .651-.035.793-.058.074-.01.127-.019.185-.019.112 0 .2.012.2.163 0 .102-.11.264-.216.358-.162-.166-.385-.198-.713-.198-.154 0-.355.03-.463.046l-.017.002-.019.003.006.056c.013.099.03.222.03.388l-.003.15-.002.187c0 .405.051.636.182.81a.38.38 0 01-.124.025c-.231 0-.298-.11-.298-.834a6.78 6.78 0 00-.012-.373l-.006-.135-.03.025c-.342.285-.697.794-.718 1.175-.103-.073-.215-.236-.215-.36 0-.209.287-.52.62-.882l.19-.208.025-.027-.063-.016a1.24 1.24 0 00-.318-.058c-.372 0-.605.077-.749.248a.909.909 0 01-.095-.382c0-.073.013-.123.04-.152.032-.035.082-.035.127-.035h.01c.41 0 .9.08 1.092.114l.012.003.007-.01c.033-.048.815-1.184 1.019-1.785a.372.372 0 01.169-.034c.154 0 .197.113.241.287-.49.647-.794 1.15-.905 1.496M4.166 4.893c0-.849.567-1.52.766-1.71l.144.036c-.212.282-.587.755-.587 1.38 0 1.242 1.219 2.32 2.599 2.32-.01.106-.014.218-.014.334 0 .183.01.353.026.514-1.56-.01-2.934-1.39-2.934-2.875m10.465 2.616c.7 1.205 1.248 1.185 2.076 1.185-.685-.57-1.137-1.303-1.354-1.677L14.075 4.79a3.38 3.38 0 00-.941-1.81c.165-.068.302-.14.384-.207-.835 0-1.663-.462-2.118-.462-.293 0-.48.19-.48.442.018.281.283.566.773.566.111 0 .253-.015.41-.044.264.403.479.767.479 1.287 0 .975-1.071 1.736-2.152 1.736a2.13 2.13 0 01-.18-.008c-.099-.242-.425-.648-.425-1.11 0-.774.465-1.407.465-2.175 0-.477-.214-.773-.296-.896.133-.134.278-.298.312-.411-.077.036-.169.04-.302.04-.519 0-.941-.146-1.353-.146-.235 0-.298.079-.298.154 0 .028.004.056.01.07a1.179 1.179 0 00-.266-.084 2.041 2.041 0 00-.393-.037c-.5 0-.678.229-.678.425 0 .165.12.467.256.698.195-.107.43-.18.536-.18.266 0 .502.276.627.602-.179.024-.213.032-.393.032-.488 0-.82-.19-.888-.19-.006 0-.02.004-.02.016 0 .074.14.271.411.379.36.143.897.202.986.219 0 .017-.09.202-.193.237a.096.096 0 01-.063.003c-.375-.08-.48-.115-.955-.312-.014-.006-.023.004-.023.02 0 .205.487.657.923.83-.364.507-.82 1.025-1.034 1.815-.06.005-.12.008-.18.008-1.081 0-2.152-.76-2.152-1.736 0-.52.214-.884.48-1.287.155.029.297.044.408.044.49 0 .756-.285.775-.566 0-.251-.188-.442-.482-.442-.455 0-1.282.462-2.118.462.083.068.22.14.384.207a3.371 3.371 0 00-.94 1.81L2.092 7.016c-.215.374-.67 1.106-1.354 1.677.827 0 1.376.02 2.076-1.185l.656-1.142c.048.148.108.292.178.434L2.344 9.07c-.216.377-.666 1.102-1.354 1.677.828 0 1.376.021 2.076-1.184l1.122-1.956c.084.097.173.192.266.283L2.87 10.652c-.217.378-.665 1.101-1.353 1.675.827 0 1.376.022 2.075-1.183l1.545-2.692c.102.07.206.138.314.202l-1.885 3.284c-.218.377-.665 1.099-1.353 1.675.827 0 1.375.021 2.076-1.184l1.938-3.382c.115.048.231.094.35.135l-2.193 3.821c-.214.373-.672 1.108-1.353 1.676.827 0 1.376.02 2.075-1.184l2.337-4.073c.024.005.048.008.07.014.064.22.109.425.109.63 0 1.28-.771 2.41-1.697 3.283.06.028.163.038.258.038.191 0 .314-.011.401-.028-.215.531-.676 1.217-.908 1.571a6.176 6.176 0 00-1.033-.105c-.302 0-.336.192-.336.364 0 .298.129.536.278.668.056-.152.169-.356.726-.356l.057.003c-.163.198-.674.647-.674 1.01 0 .239.241.599.56.599-.02-.078-.017-.149-.017-.202 0-.294.239-.637.44-.877-.006.072-.002.064-.002.148 0 .693.057 1.012.461 1.012.198 0 .335-.119.382-.154-.262-.263-.276-.47-.276-.859l.003-.336c0-.09 0-.207-.014-.292.144-.022.203-.022.315-.022 0 0 .573-.05.712.276.156-.156.382-.376.382-.618 0-.16-.07-.34-.365-.34-.113 0-.465.074-.76.074.08-.192.432-.753.738-1.16a.938.938 0 00.278.468c.023-.262.163-1.09.54-1.575.043.327.102.663.102 1.371 0 1.723-.38 2.995-1.188 3.238.106.199.328.378.558.378.296 0 .456-.364.62-.707.086.253.322.874.558.874.237 0 .474-.62.559-.874.163.343.325.707.62.707.23 0 .453-.179.558-.378-.807-.243-1.188-1.515-1.188-3.238 0-.708.059-1.044.102-1.371.377.484.519 1.313.54 1.575a.94.94 0 00.279-.468c.305.407.658.968.737 1.16-.295 0-.648-.075-.76-.075-.294 0-.364.181-.364.341 0 .242.226.462.382.618.137-.326.712-.276.712-.276.111 0 .17 0 .315.022-.014.085-.014.202-.014.292.002.136.002.235.002.336 0 .389-.013.596-.276.859.047.035.184.154.382.154.404 0 .463-.319.463-1.012 0-.084.002-.076-.004-.148.202.24.44.583.44.877 0 .053.003.124-.017.202.319 0 .561-.36.561-.6 0-.362-.51-.811-.675-1.009l.056-.003c.559 0 .672.204.728.356a.896.896 0 00.277-.668c0-.172-.034-.364-.336-.364-.289 0-.729.046-1.032.105-.234-.354-.693-1.04-.909-1.57.087.016.211.027.402.027.096 0 .198-.01.258-.038-.926-.873-1.697-2.003-1.697-3.283 0-.205.044-.41.108-.63.022-.006.047-.01.07-.014l2.337 4.073c.7 1.204 1.249 1.184 2.075 1.184-.68-.568-1.138-1.303-1.352-1.676l-2.193-3.821c.12-.041.236-.087.351-.135l1.94 3.382c.7 1.205 1.248 1.184 2.076 1.184-.689-.576-1.136-1.298-1.353-1.675l-1.885-3.284c.107-.064.211-.132.313-.202l1.544 2.692c.7 1.205 1.248 1.183 2.075 1.183-.688-.574-1.135-1.297-1.353-1.675l-1.583-2.76c.093-.092.182-.187.264-.284l1.124 1.956c.7 1.205 1.248 1.184 2.075 1.184-.688-.575-1.136-1.3-1.354-1.677L13.798 6.8c.07-.142.13-.286.178-.434l.655 1.142zm8.799 9.449h-2.521V2.445h2.521z"
          />
          <path fill="red" d="M23.43 32.322h-2.521V17.81h2.521z" />
          <path fill="#FC0" d="M23.43 46.834h-2.521V32.322h2.521z" />
        </g>
      </svg>
    );
  }
}
