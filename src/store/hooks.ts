import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
// 重写 useSelector 时用 TypedUseSelectorHook 给它加了 RootState 类型以后，
// 我们在使用这个加强版的useSelector以后，它就会自带store中的所有类型，
// 我们就不需要在文件（组件）中引入store了。当我们不再引用store的时候，sotre和组件就解绑了
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
