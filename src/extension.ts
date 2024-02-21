import * as vscode from 'vscode';
import { onTextUpdates } from './vscode-helper';
import { AnchorCommentTreeDataProvider, getAnchorComments } from './comments';

export function activate(context: vscode.ExtensionContext) {
  console.log('vscode-simple-anchor-comments is now active!');

  // just for debugging
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'vscode-simple-anchor-comments.sayHello',
      (name) => {
        console.log('Hello vscode-simple-anchor-comments!!!');
        vscode.window.showInformationMessage(
          'Hello! vscode-simple-anchor-comments is installed.',
        );
      },
    ),
  );

  // create a tree view that is updated on text changes
  const treeDataProvider = new AnchorCommentTreeDataProvider();
  const view = vscode.window.createTreeView('vscode-simple-anchor-comments', {
    treeDataProvider,
  });
  context.subscriptions.push(view);

  onTextUpdates(context, async (activeEditor, document) => {
    const anchorComments = getAnchorComments(document);
    treeDataProvider.update(anchorComments);
  });
}
