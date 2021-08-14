// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle = require('../../../app/model/article');
import ExportComment = require('../../../app/model/comment');
import ExportFile = require('../../../app/model/file');

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Comment: ReturnType<typeof ExportComment>;
    File: ReturnType<typeof ExportFile>;
  }
}
