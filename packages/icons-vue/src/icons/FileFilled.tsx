// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileFilledSvg}></AntdIcon>;
};

FileFilled.displayName = 'FileFilled';
FileFilled.inheritAttrs = false;
export default FileFilled;