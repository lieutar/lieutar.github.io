import { DxmlBuilder } from "dxml-publi";
import { staticDriverWithPackageDir, defaultSuffixRules } from "scroute";

await (await staticDriverWithPackageDir({
  importMeta:   import.meta,
  documentRoot: '@pkg/src/pages',
  distDir:      '@pkg/dist/pages',
  suffixRules: [ ['.dxml', DxmlBuilder], ... defaultSuffixRules ]
})).build();
