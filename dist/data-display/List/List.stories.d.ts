import { StoryFn } from "@storybook/react";
interface ListItemArgs {
  header: string;
  supportText: string;
  className: string;
}
declare const _default: import("@storybook/types").ComponentAnnotations<
  import("@storybook/react/dist/types-0a347bb9").R,
  import("@storybook/types").Args
>;
export default _default;
export declare const Default: StoryFn<ListItemArgs>;
export declare const ListItemSwitch: StoryFn<ListItemArgs>;
export declare const ListItemCheckbox: StoryFn<ListItemArgs>;
