# STR Extension for Chrome browser

The STR Extension is a tool designed to help QA teams quickly and efficiently describe bugs they encounter during their testing process. With this extension, users can easily isert "steps to reproduce" template and insert last description text if the jira pop-up fails, all within the browser window.

## Installation

To install the STR Chrome Extension, follow these steps:

1. Open Google Chrome.
2. Go to the Chrome Web Store: [https://chrome.google.com/webstore/category/extensions](https://chrome.google.com/webstore/category/extensions)
3. Search for "STR Extension" in the search bar.
4. Click "Add to Chrome" to install the extension.

## Features

The STR extension offers the following features:

### Inserting text from a template

QA engineers can insert formatting text from a template into the "Description" field with just one click. There are three most commonly used templates in bug descriptions to choose from. The first template by clicking on the "Steps to reproduce" button looks like this:

		Steps to reproduce:
		1.
		Actual result
		
		Expected result
		
The second template by clicking on the button "Description + steps to reproduce" looks like this:

		Description
		
		Steps to reproduce:
		1.
		Actual result
		
		Expected result
		
The third template by clicking on the button "All" looks like this:

		Description

		Preconditions:
		
		Steps to reproduce:
		1.
		Actual result
		
		Expected result

		Additional
		
### Inser last description

The functionality helps to restore the last description of the bug report, which is located in the "Description" field. If the pop-up window in the jira is buggy and the description of the error has not been saved, then by pressing just one button "Insert last description" you can completely restore all the data that the user entered in advance, even if he restarts the computer.

#### !IMPORTANT
    Text tracking only works after the user selects a template from the popup

## Usage

To use the STR extension, simply click on the extension's icon in the browser toolbar. From there, users can choose to either insert a description template (if not inserted, first activate the description field by clicking on it and then select the template) or insert the last description that was saved.

#### !IMPORTANT
    Text tracking only works after the user selects a template from the popup

## Conclusion

The STR Extension is a powerful tool that can help QA teams streamline their bug reporting process. With its easy-to-use features for insert description from templete, tracking last description. QA teams can quickly and accurately describe the bugs they encounter and not be afraid to lose data if there are problems with the bug tracker.