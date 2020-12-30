# zendeskChatGreet

This is a Chrome extension for greeting ZD chat customers

I wrote this extension because I was fed up with manually greeting customers on Zendesk Chat. The extension will grab the customer's name from the Chat window, and replace the contents of the message box with a greeting as defined in the options page.

The greeting will default to Hi there [name]

This extension is useful if (like at my work) you can't create your own chat macros, and there is no good chat macro for personally greeting customers.

The extension uses regex matching to find the customer's name in a way that works best for me - full disclosure, it may not be the best for you.

The matching rules are:

If the full customer name is just a name (e.g. John Smith), [name] will be replaced with "John"

If the customer name has brackets in it (e.g. Acme Ltd (John)), [name] will be replaced with "John"

If the customer name starts with 'Visitor', [name] will be replaced with "" (i.e. only the beginning of the greeting will be returned)

The extension is triggered with Alt-Shift-Y on PC and Ctrl-Shift-Y on Mac.

The keybinding can be changed in the extensions page of Chrome.