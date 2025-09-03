/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Obsidian Vault Path - Path to your Obsidian vault */
  vaultPath: string;
  /** Notes Subfolder - Subfolder within vault for new notes */
  notesSubfolder: string;
};

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences;

declare namespace Preferences {
  /** Preferences accessible in the `create-note` command */
  export type CreateNote = ExtensionPreferences & {};
}

declare namespace Arguments {
  /** Arguments passed to the `create-note` command */
  export type CreateNote = {};
}
