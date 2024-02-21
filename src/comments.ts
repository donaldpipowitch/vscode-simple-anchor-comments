import * as vscode from 'vscode';

type AnchorComment = {
  label: string;
  line: string;
  index: number;
  document: vscode.TextDocument;
};

// note: this is a dumb approach - I created this as part of a workshop to learn VS Code development
export function getAnchorComments(document: vscode.TextDocument) {
  const text = document.getText();
  const lines = text.split('\n');
  const anchorComments = lines
    .map((line, index) => {
      if (line.includes('// #'))
        return { line, label: line.replace('// #', ''), index, document };
      else return null;
    })
    .filter(Boolean) as AnchorComment[];
  return anchorComments;
}

export class AnchorCommentTreeDataProvider
  implements vscode.TreeDataProvider<AnchorComment>
{
  private _elements: AnchorComment[] = [];

  getTreeItem(element: AnchorComment): vscode.TreeItem {
    return {
      label: element.label,
      command: {
        title: '',
        // see https://code.visualstudio.com/api/references/commands
        command: 'editor.action.goToLocations',
        arguments: [
          // uri - The text document in which to start
          element.document.uri,
          // position - The position at which to start
          new vscode.Position(element.index, 0),
          // locations - An array of locations.
          [],
          // multiple - Define what to do when having multiple results, either peek, gotoAndPeek, or goto
          'goto',
          // noResultsMessage - Human readable message that shows when locations is empty.
          '',
        ],
      },
    };
  }

  getChildren(element?: AnchorComment): AnchorComment[] {
    return this._elements;
  }

  private _onDidChangeTreeData: vscode.EventEmitter<AnchorComment | void> =
    new vscode.EventEmitter<AnchorComment | void>();
  readonly onDidChangeTreeData: vscode.Event<AnchorComment | void> =
    this._onDidChangeTreeData.event;

  update(elements: AnchorComment[]): void {
    this._elements = elements;
    this._onDidChangeTreeData.fire();
  }
}
