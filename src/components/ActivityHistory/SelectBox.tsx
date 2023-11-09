// import * as S from './Modal.styles';

// export const SelectBox = () => {
//   const [currentCategory, setCurrentCategory] = useState('');
//   const [CategoryOptions, setCategoryOptions] = useState(false);

//   const onSelectCategory = (menu: MenuList) => {
//     setMenuId(menu.id);
//     setCurrentCategory(menu.title);
//     setCategoryOptions(prev => !prev);
//   };
//   return (
//     {isVisibleTitle && (
//       <S.SelectWrapper>
//         <S.SelectOptions1 style={{ zIndex: 1 }}>
//           {searchTitle?.map(title => (
//             <S.Option key={title} onMouseDown={() => onSelectTitle(title)}>
//               {title}
//             </S.Option>
//           ))}
//         </S.SelectOptions1>
//       </S.SelectWrapper>
//     )}
//   );
// };
