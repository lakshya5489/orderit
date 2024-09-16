import React, { useEffect } from 'react';
import Fooditem from './Fooditem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMenus } from '../../actions/menuAction';
import Loader from './Loader';
import Message from './Message';

export default function Menu() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { menus, loading, error } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(getMenus(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : menus && menus.length > 0 ? (
          menus.map((menu) => (
            <div key={menu.id}>
              <h2>{menu.category}</h2>
              <hr />
              {menu.items && menu.items.length > 0 ? (
                <div className='row'>
                  {menu.items.map((fooditem) => (
                    <Fooditem key={fooditem._id} fooditem={fooditem} restaurant={id} />
                  ))}
                </div>
              ) : (
                <Message variant="info">No Food Items Found</Message>
              )}
            </div>
          ))
        ) : (<Message variant="info">No Menus Found</Message>)}
      </div>
    </>
  );
}
